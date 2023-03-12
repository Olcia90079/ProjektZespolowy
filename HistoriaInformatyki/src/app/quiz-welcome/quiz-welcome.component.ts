import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

interface Quizz {
  no: number,
  page: string,
  title: string
}

@Component({
  selector: 'app-quiz-welcome',
  templateUrl: './quiz-welcome.component.html',
  styleUrls: ['./quiz-welcome.component.css']
})

export class QuizWelcomeComponent implements OnInit {
  basicQuizz: Quizz = {
    no: 0,
    page: "all",
    title: "Wszystkie pytania"
  };

  numElements: number = 5;
  numAnswers: number = 3;
  numTrueAnswers: number = 1;
;
  quizzes: Quizz[] = [];

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sendRequest();
  }

  private sendRequest() {
    this.http.get<Quizz[]>('assets/docs/Tablice/correctedTableList.json').subscribe(response => {
      this.quizzes = response;
    })
  }

  async playAll() {
    await this.sharedService.setNumElements(this.numElements);
    await this.sharedService.setNumAnswers(this.numAnswers);
    await this.sharedService.setNumTrueAnswers(this.numTrueAnswers);
    await this.sharedService.setNo(this.basicQuizz.no);
    await this.sharedService.setPage(this.basicQuizz.page);
    await this.sharedService.setTitle(this.basicQuizz.title);

    this.router.navigate(['/quiz']);
  }

  async play(quizz: Quizz) {
    await this.sharedService.setNumElements(this.numElements);
    await this.sharedService.setNumAnswers(this.numAnswers);
    await this.sharedService.setNumTrueAnswers(this.numTrueAnswers);
    await this.sharedService.setNo(quizz.no);
    await this.sharedService.setPage(quizz.page);
    await this.sharedService.setTitle(quizz.title);

    this.router.navigate(['/quiz']);
  }

}
