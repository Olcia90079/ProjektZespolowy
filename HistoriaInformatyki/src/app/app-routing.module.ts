import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { TabliceComponent } from './tablice/tablice.component';

const routes: Routes = [
  {
    path: 'tablica/:id', component: TabliceComponent
  },
  {
    path: 'quiz', component: QuizComponent
  },
  {
    path: 'tablica',
    redirectTo: 'tablica/1a',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
