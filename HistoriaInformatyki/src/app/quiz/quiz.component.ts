import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Answer {
  answer: string;
  correct: boolean;
}

interface QuizQuestions {
  no: number;
  page: number;
  question: string;
  answers: Answer;
}


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: QuizQuestions[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.sendRequest();
  }

  private sendRequest() {
    
}



}
