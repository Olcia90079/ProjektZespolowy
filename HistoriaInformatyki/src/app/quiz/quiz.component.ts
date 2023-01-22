import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Answer {
  answer: string;
  correct: boolean;
}

interface QuizzQuestion {
  no: number;
  page: number;
  question: string;
  answers: Answer[];
}


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})


export class QuizComponent implements OnInit {
  questions: QuizzQuestion[] = [];
  active_question: number = 0;
  score: number = 0;
  max_score: number = 0;
  isDisabled: boolean = false;
  bottomButton: string = "Next";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.sendRequest();
  }

  private sendRequest() {
    this.http.get<QuizzQuestion[]>('assets/docs/Quiz/corrected_questions.json').subscribe(response => {
      this.questions = this.pickRandomQuestions(3,3,response);
    })
  }

  pickRandomQuestions(numElements: number, numAnswers: number, questions: QuizzQuestion[]) {
    this.max_score = numElements;
    questions = questions.filter(item => item.no !== 0 || item.page !== 0);
    questions.sort(() => Math.random() - 0.5);

    for (let i = 0; i < questions.length; i++) {
      questions[i].answers = questions[i].answers.slice(0, numAnswers)
      questions[i].answers.sort(() => Math.random() - 0.5);
    }

    return questions.slice(0, numElements);
  }

  next() {
    if (this.active_question + 1 < this.questions.length) {
      this.active_question += 1;
      this.isDisabled = false;
    }

  }

  checkAnswer(correct: boolean) {
    this.isDisabled = true;

    if (correct) {
      this.score = this.score + 1;
    } else {
      this.score = this.score - 1;
    }

    if (this.active_question + 1 === this.questions.length) {
      this.router.navigate(['/quiz-score'], { queryParams: { score: this.score, max_score: this.max_score } });
    }
    
  }

  setButtonColor(correct: boolean) {
    if (this.isDisabled) {
      if (correct) {
        return 'correct';
      } else {
        return 'incorrect';
      }
    } else {;
      return '';
    }
  }

}
