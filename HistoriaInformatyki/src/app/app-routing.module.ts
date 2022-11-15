import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabliceComponent } from './tablice/tablice.component';

const routes: Routes = [
  {
    path: 'tablica/:id', component: TabliceComponent
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
