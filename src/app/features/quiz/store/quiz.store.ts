import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
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
                currentIndex: 0,
                answers: {},
                revealed: {},
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
    reset(): void {
      patchState(store, initialState);
    },
  })),
);
