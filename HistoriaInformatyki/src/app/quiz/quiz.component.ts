import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface QuizzQuestion {
  nr: number;
  strona: string;
  pytanie: string;
  pr_odpowiedz: string[];
  npr_odp: string[];
}


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: QuizzQuestion[] = [];
  selected: string[] = [];
  active_question: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.sendRequest();
  }

  private sendRequest() {
    this.http.get<QuizzQuestion[]>('assets/docs/Quiz/pytania.json').subscribe(response => {
      this.questions = this.selectRandomElements(5, response);
    })
  }

  getRandomElements(array: any[], numElements: number): any[] {
    // Create a copy of the array
    let copy = array.slice();

    // Remove all elements with nr=0 and strona="0"
    copy = copy.filter(item => item.nr !== 0 || item.strona !== "0");

    // Shuffle the copy of the array
    copy.sort(() => Math.random() - 0.5);

    // Return the first numElements elements
    return copy.slice(0, numElements);
  }

  selectRandomElements(numElements: number, questions: QuizzQuestion[]) {
    return this.getRandomElements(questions, numElements);
  }

  getRandomPosition(questionNumbers: number): number {
    let random = Math.floor(Math.random() * (questionNumbers));
    console.log(questionNumbers)
    return random
  }

  getCorrectAnswer(item: any) {
    return this.getRandomElements(item.pr_odpowiedz, 1);
  }

  next() {
    if (this.active_question + 1 < this.questions.length) {
      this.active_question += 1;
    }

  }

  previous() {
    if (this.active_question > 0) {
      this.active_question -= 1;
    }
  }
}
