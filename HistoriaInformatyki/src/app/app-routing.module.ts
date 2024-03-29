import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizWelcomeComponent } from './quiz-welcome/quiz-welcome.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';
import { TabliceComponent } from './tablice/tablice.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tablica/:id', component: TabliceComponent },
  { path: 'quiz-welcome', component: QuizWelcomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz-score', component: QuizScoreComponent },
  { path: 'tablica', redirectTo: 'tablica/0' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
