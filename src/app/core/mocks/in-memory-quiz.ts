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
