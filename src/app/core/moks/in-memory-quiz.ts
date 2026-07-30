import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Question } from '../models/question.model';
import { Topic } from '../models/topic.model';
import { MOCK_QUESTIONS, MOCK_TOPICS } from './quiz-mock-data';

@Injectable()
export class InMemoryQuizService {
  private readonly latencyMs = 400;

  getTopics(): Observable<Topic[]> {
    return of(MOCK_TOPICS).pipe(delay(this.latencyMs));
  }

  getQuestionsByTopic(topicId: string): Observable<Question[]> {
    const questions = MOCK_QUESTIONS[topicId];
    if (!questions) {
      return throwError(() => new Error(`Tema no encontrado: ${topicId}`)).pipe(
        delay(this.latencyMs),
      );
    }
    return of(questions).pipe(delay(this.latencyMs));
  }
}
