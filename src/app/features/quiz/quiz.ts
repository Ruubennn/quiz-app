import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { RadioButton } from 'primeng/radiobutton';
import { ProgressBar } from 'primeng/progressbar';
import { ProgressSpinner } from 'primeng/progressspinner';
import { QuizStore } from './store/quiz.store';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule, Card, Button, RadioButton, ProgressBar, ProgressSpinner],
  providers: [QuizStore],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  store = inject(QuizStore);

  finished = signal(false);

  progress = computed(() => {
    const total = this.store.totalQuestions();
    if (total === 0) return 0;
    return ((this.store.currentIndex() + 1) / total) * 100;
  });

  score = computed(() => {
    const answers = this.store.answers();
    let correct = 0;
    for (const q of this.store.questions()) {
      if (answers[q.id] === q.correctIndex) correct++;
    }
    return correct;
  });

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('topicId');
    if (!topicId) {
      this.router.navigate(['/topics']);
      return;
    }
    this.store.loadTopic(topicId);
  }

  finish(): void {
    this.finished.set(true);
  }

  backToTopics(): void {
    this.router.navigate(['/topics']);
  }

  optionClass(questionId: string, optionIndex: number, correctIndex: number): string {
    if (!this.store.isCurrentRevealed()) return '';
    if (optionIndex === correctIndex) return 'correct';
    if (this.store.answers()[questionId] === optionIndex) return 'wrong';
    return '';
  }

  get canReveal(): boolean {
    const q = this.store.currentQuestion();
    return !!q && this.store.answers()[q.id] !== undefined;
  }
}
