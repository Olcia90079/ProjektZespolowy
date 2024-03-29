import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabliceComponent } from './tablice/tablice.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizWelcomeComponent } from './quiz-welcome/quiz-welcome.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material.module';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';


import { QuizScoreComponent } from './quiz-score/quiz-score.component';


@NgModule({
  declarations: [
    AppComponent,
    TabliceComponent,
    QuizComponent,
    QuizWelcomeComponent,
    HomeComponent,
    MenuComponent,
    QuizScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
