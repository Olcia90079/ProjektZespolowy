import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


interface Answer {
  answer: string;
  correct: boolean;
}

interface QuizzQuestion {
  no: number;
  page: string;
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

  numElements: number = 3;
  numAnswers: number = 3;
  numTrueAnswers: number = 1;
  no: number = 0;
  page: string = "all";
  title: string = "all questions";


  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.numElements = +this.sharedService.getNumElements();
    this.numAnswers = +this.sharedService.getnumAnswers();
    this.numTrueAnswers = this.sharedService.getNumTrueAnswers();
    this.no = +this.sharedService.getNo();
    this.page = this.sharedService.getPage();
    this.title = this.sharedService.getTitle();

    this.sendRequest(this.numElements, this.numAnswers, this.numTrueAnswers, this.no, this.page);
  }

  private sendRequest(numElements: number, numAnswers: number, numTrueAnswers: number, no: number, page: string) {
    this.http.get<QuizzQuestion[]>('assets/docs/Quiz/corrected_questions.json').subscribe(response => {
      this.questions = this.pickRandomQuestions(numElements, 3, 1, no, page, response);
    })
  }

  pickRandomQuestions(numElements: number, numAnswers: number, numTrueAnswers: number, no: number, page: string, questions: QuizzQuestion[]) {
    this.sharedService.setScore(0);

    questions.sort(() => Math.random() - 0.5);

    if (no == 0) {
      //random from all tables
      questions = questions.slice(0, numElements);
    }

    if (no != 0) {
      if (page == "all") {
        //all pages
        questions = questions.filter(q => q.no === no).slice(0, numElements);
      }
      if (page != "all") {
        //random from one table with number no and page
        questions = questions.filter(q => q.no === no && q.page === page).slice(0, numElements);
      }
    }

    questions = this.chooseAnswers(numAnswers, numTrueAnswers, questions);

    this.sharedService.setMaxScore(questions.length);

    return questions;
  }

  chooseAnswers(numAnswers: number, numTrueAnswers: number, questions: QuizzQuestion[]) {
    questions.forEach(question => {
      const correctAnswers = question.answers.filter(answer => answer.correct).slice(0, numTrueAnswers);
      const incorrectAnswers = question.answers.filter(answer => !answer.correct).slice(0, numAnswers - numTrueAnswers);
      const randomizedAnswers = correctAnswers.concat(
        incorrectAnswers
      ).sort(() => Math.random() - 0.5);
      question.answers = randomizedAnswers;
    });

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
