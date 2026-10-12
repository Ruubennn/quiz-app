import { computed, effect, inject } from '@angular/core';
import {
  signalStore,
  withState,
  withComputed,
  withMethods,
  withHooks,
  patchState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, of } from 'rxjs';

import { QuizService } from '../../../core/services/quiz';
import { Question } from '../../../core/models/question.model';

type QuizState = {
  topicId: string | null;
  questions: Question[];
  currentIndex: number;
  answers: Record<string, number>; // questionId -> índice elegido
  revealed: Record<string, boolean>;
  loading: boolean;
  error: string | null;
};

const initialState: QuizState = {
  topicId: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  revealed: {},
  loading: false,
  error: null,
};

type SavedProgress = Pick<QuizState, 'currentIndex' | 'answers' | 'revealed'>;

const STORAGE_PREFIX = 'quiz-progress:';

function loadProgress(topicId: string): SavedProgress | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + topicId);
    return raw ? (JSON.parse(raw) as SavedProgress) : null;
  } catch {
    return null;
  }
}

function saveProgress(topicId: string, progress: SavedProgress): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + topicId, JSON.stringify(progress));
  } catch {
    // almacenamiento no disponible: se ignora
  }
}

function clearProgress(topicId: string): void {
  try {
    localStorage.removeItem(STORAGE_PREFIX + topicId);
  } catch {
    // almacenamiento no disponible: se ignora
  }
}

// Restaura el progreso guardado descartando preguntas que ya no existan
function restoreProgress(topicId: string, questions: Question[]): SavedProgress {
  const saved = loadProgress(topicId);
  if (!saved || questions.length === 0) return { currentIndex: 0, answers: {}, revealed: {} };

  const ids = new Set(questions.map((q) => q.id));
  const answers: Record<string, number> = {};
  const revealed: Record<string, boolean> = {};
  for (const [id, value] of Object.entries(saved.answers ?? {})) {
    if (ids.has(id)) answers[id] = value;
  }
  for (const [id, value] of Object.entries(saved.revealed ?? {})) {
    if (ids.has(id)) revealed[id] = value;
  }
  const index = Number.isInteger(saved.currentIndex) ? saved.currentIndex : 0;
  return {
    currentIndex: Math.min(Math.max(index, 0), questions.length - 1),
    answers,
    revealed,
  };
}

export const QuizStore = signalStore(
  withState(initialState),
  withComputed(({ questions, currentIndex, answers, revealed }) => ({
    currentQuestion: computed(() => questions()[currentIndex()] ?? null),
    totalQuestions: computed(() => questions().length),
    isFirst: computed(() => currentIndex() === 0),
    isLast: computed(() => currentIndex() === questions().length - 1),
    answeredCount: computed(() => Object.keys(answers()).length),
    isCurrentRevealed: computed(() => {
      const q = questions()[currentIndex()];
      return q ? !!revealed()[q.id] : false;
    }),
  })),
  withMethods((store, quizService = inject(QuizService)) => ({
    loadTopic: rxMethod<string>(
      pipe(
        tap((topicId) => patchState(store, { loading: true, error: null, topicId })),
        switchMap((topicId) =>
          quizService.getQuestionsByTopic(topicId).pipe(
            tap((questions) =>
              patchState(store, {
                questions,
                ...restoreProgress(topicId, questions),
                loading: false,
              }),
            ),
            catchError(() => {
              patchState(store, {
                loading: false,
                error: 'No se pudieron cargar las preguntas',
              });
              return of([]);
            }),
          ),
        ),
      ),
    ),
    answer(questionId: string, optionIndex: number): void {
      patchState(store, (state) => {
        if (state.revealed[questionId]) return {}; // no permitir cambiar
        return { answers: { ...state.answers, [questionId]: optionIndex } };
      });
    },
    reveal(questionId: string): void {
      patchState(store, (state) => ({
        revealed: { ...state.revealed, [questionId]: true },
      }));
    },
    next(): void {
      patchState(store, (state) => ({
        currentIndex: Math.min(state.currentIndex + 1, state.questions.length - 1),
      }));
    },
    previous(): void {
      patchState(store, (state) => ({
        currentIndex: Math.max(state.currentIndex - 1, 0),
      }));
    },
    restart(): void {
      const topicId = store.topicId();
      if (topicId) clearProgress(topicId);
      patchState(store, { currentIndex: 0, answers: {}, revealed: {} });
    },
    reset(): void {
      patchState(store, initialState);
    },
  })),
  withHooks({
    onInit(store) {
      // Guarda el progreso en cada cambio para poder retomarlo al volver al tema
      effect(() => {
        const topicId = store.topicId();
        const progress: SavedProgress = {
          currentIndex: store.currentIndex(),
          answers: store.answers(),
          revealed: store.revealed(),
        };
        if (!topicId || store.loading() || store.questions().length === 0) return;
        saveProgress(topicId, progress);
      });
    },
  }),
);
