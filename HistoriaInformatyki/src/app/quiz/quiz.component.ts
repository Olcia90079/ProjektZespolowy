import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { filter, map } from 'rxjs/operators';


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
  maxScore: number = 0;
  isDisabled: boolean = false;
  bottomButton: string = "Dalej";

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.sendRequest();
  }

  private sendRequest() {
    this.http.get<QuizzQuestion[]>('assets/docs/Quiz/corrected_questions.json').subscribe(response => {
      this.questions = this.pickRandomQuestions(6,2,1,[],"all",response);
    })
  }

  pickRandomQuestions(numElements: number, numAnswers: number, numTrueAnswers: number, no: number[], page: string, questions: QuizzQuestion[]) {
    this.sharedService.setMaxScore(numElements);
    this.sharedService.setScore(0);

    questions.sort(() => Math.random() - 0.5);
    questions = questions.slice(0, numElements);

    questions.forEach(question => {
      const correctAnswers = question.answers.filter(answer => answer.correct).slice(0, numTrueAnswers);
      const incorrectAnswers = question.answers.filter(answer => !answer.correct).slice(0, numAnswers - numTrueAnswers);
      const randomizedAnswers = correctAnswers.concat(
        incorrectAnswers
      ).sort(() => Math.random() - 0.5);
      question.answers = randomizedAnswers;
    });

    //for (let i = 0; i < questions.length; i++) {
    //  questions[i].answers = Arrays.stream(questions[i].answers)
    //    .filter(answer -> answer.correct == true)
    //    .limit(numTrueAnswers)
    //    .toArray(Answer[]:: new);

    //  questions[i].answers = questions[i].answers.slice(0, numAnswers)
    //  questions[i].answers.sort(() => Math.random() - 0.5);
    //}

    return questions;
  }

  next() {
    if (this.active_question + 1 === this.questions.length) {
      this.router.navigate(['/quiz-score']);
    }
    if (this.active_question + 1 < this.questions.length) {
      this.active_question += 1;
      this.isDisabled = false;
    }
  }

  checkAnswer(correct: boolean) {
    this.isDisabled = true;

    if (this.active_question + 1 === this.questions.length) {
      this.bottomButton = "Wyświetl wynik";
    }

    if (correct) {
      this.sharedService.addPoint();
    } else {
      this.sharedService.removePoint();
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
