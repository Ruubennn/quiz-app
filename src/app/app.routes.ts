import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'topics', pathMatch: 'full' },
  {
    path: 'topics',
    loadComponent: () =>
      import('./features/topic-selection/topic-selection').then((m) => m.TopicSelection),
  },
  {
    path: 'quiz/:topicId',
    loadComponent: () => import('./features/quiz/quiz').then((m) => m.Quiz),
  },
];
