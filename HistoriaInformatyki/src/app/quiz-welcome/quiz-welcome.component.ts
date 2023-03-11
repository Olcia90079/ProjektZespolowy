import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Quizz {
  no: number,
  page: number,
  title: string
}

@Component({
  selector: 'app-quiz-welcome',
  templateUrl: './quiz-welcome.component.html',
  styleUrls: ['./quiz-welcome.component.css']
})

export class QuizWelcomeComponent implements OnInit {
  basicQuizz: Quizz = {
    no: 1,
    page: 0,
    title: "all"
  };

  numElements: number = 3;
  numAnswers: number = 3;
  numTrueAnswers: number = 1;
;
  quizzes: Quizz[] = [this.basicQuizz];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.sendRequest();
  }

  private sendRequest() {
    this.http.get<Quizz[]>('assets/docs/Tablice/correctedTableList.json').subscribe(response => {
      this.quizzes = response;
    })
  }

}
