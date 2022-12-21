import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizWelcomeComponent } from './quiz-welcome/quiz-welcome.component';
import { QuizComponent } from './quiz/quiz.component';
import { TabliceComponent } from './tablice/tablice.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tablica/:id', component: TabliceComponent },
  { path: 'quiz-welcome', component: QuizWelcomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'tablica', redirectTo: 'tablica/1a' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
