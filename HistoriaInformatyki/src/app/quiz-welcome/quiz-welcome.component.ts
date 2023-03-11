import { Component, OnInit } from '@angular/core';

interface Quizz {
  numQuestions: number,
  numAnswers: number,
  numTrueAnswers: number,
  tableNo: number,
  page: string
}

@Component({
  selector: 'app-quiz-welcome',
  templateUrl: './quiz-welcome.component.html',
  styleUrls: ['./quiz-welcome.component.css']
})

export class QuizWelcomeComponent implements OnInit {
  basicQuizz: Quizz = {
    numQuestions: 3,
    numAnswers: 3,
    numTrueAnswers: 1,
    tableNo: 0,
    page: "all"
  };
;
  quizzes: Quizz[] = [this.basicQuizz];

  constructor() { }

  ngOnInit(): void {
  }

}
