import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { ProgressSpinner } from 'primeng/progressspinner';

import { QuizService } from '../../core/services/quiz';
import { Topic } from '../../core/models/topic.model';

@Component({
  selector: 'app-topic-selection',
  imports: [Card, Button, ProgressSpinner],
  templateUrl: './topic-selection.html',
  styleUrl: './topic-selection.scss',
})
export class TopicSelection implements OnInit {
  private quizService = inject(QuizService);
  private router = inject(Router);

  topics = signal<Topic[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.quizService.getTopics().subscribe({
      next: (topics) => {
        this.topics.set(topics);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar los temas');
        this.loading.set(false);
      },
    });
  }

  start(topicId: string): void {
    this.router.navigate(['/quiz', topicId]);
  }
}
