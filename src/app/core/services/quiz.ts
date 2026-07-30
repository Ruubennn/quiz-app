import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Question } from '../models/question.model';
import { Topic } from '../models/topic.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private http = inject(HttpClient);
  private baseUrl = '/api';

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/topics`);
  }

  getQuestionsByTopic(topicId: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseUrl}/topics/${topicId}/questions`);
  }
}
