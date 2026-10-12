import { Injectable } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Question } from '../models/question.model';
import { Topic } from '../models/topic.model';
import { MOCK_TOPICS } from './quiz-mock-data';

const QUESTION_LOADERS: Record<string, () => Promise<Question[]>> = {
  'tema-1': () => import('./mock-t1').then((m) => m.QUESTIONS_TEMA_1),
  'tema-2': () => import('./mock-t2').then((m) => m.QUESTIONS_TEMA_2),
  'tema-3': () => import('./mock-t3').then((m) => m.QUESTIONS_TEMA_3),
  'tema-4': () => import('./mock-t4').then((m) => m.QUESTIONS_TEMA_4),
  'tema-5': () => import('./mock-t5').then((m) => m.QUESTIONS_TEMA_5),
  'tema-6': () => import('./mock-t6').then((m) => m.QUESTIONS_TEMA_6),
  'tema-7': () => import('./mock-t7').then((m) => m.QUESTIONS_TEMA_7),
  'tema-8.1': () => import('./mock-t8.1').then((m) => m.QUESTIONS_TEMA_8_1),
  'tema-8.2': () => import('./mock-t8.2').then((m) => m.QUESTIONS_TEMA_8_2),
  'tema-9': () => import('./mock-t9').then((m) => m.QUESTIONS_TEMA_9),
  'tema-10': () => import('./mock-t10').then((m) => m.QUESTIONS_TEMA_10),
  'tema-11': () => import('./mock-t11').then((m) => m.QUESTIONS_TEMA_11),
  'tema-12': () => import('./mock-t12').then((m) => m.QUESTIONS_TEMA_12),
  'tema-15': () => import('./mock-t15').then((m) => m.QUESTIONS_TEMA_15),
  'tema-16': () => import('./mock-t16').then((m) => m.QUESTIONS_TEMA_16),
};

@Injectable()
export class InMemoryQuizService {
  private readonly latencyMs = 400;

  getTopics(): Observable<Topic[]> {
    return of(MOCK_TOPICS).pipe(delay(this.latencyMs));
  }

  getQuestionsByTopic(topicId: string): Observable<Question[]> {
    const loader = QUESTION_LOADERS[topicId];
    if (!loader) {
      return throwError(() => new Error(`Tema no encontrado: ${topicId}`)).pipe(
        delay(this.latencyMs),
      );
    }
    return from(loader()).pipe(delay(this.latencyMs));
  }
}
