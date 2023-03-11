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
    no: 1,
    page: "all",
    title: "All quaestions"
  };

  numElements: number = 3;
  numAnswers: number = 3;
  numTrueAnswers: number = 1;
;
  quizzes: Quizz[] = [this.basicQuizz];

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sendRequest();
  }

  private sendRequest() {
    this.http.get<Quizz[]>('assets/docs/Tablice/correctedTableList.json').subscribe(response => {
      this.quizzes = response;
    })
  }

  play(quizz: Quizz) {
    this.sharedService.setNumElements(this.numElements);
    this.sharedService.setNumAnswers(this.numAnswers);
    this.sharedService.setNumTrueAnswers(this.numTrueAnswers);
    this.sharedService.setNo(quizz.no);
    this.sharedService.setPage(quizz.page);
    this.sharedService.setTitle(quizz.title);

    this.router.navigate(['/quiz']);
  }

}
