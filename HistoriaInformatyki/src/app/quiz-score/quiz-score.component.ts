import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent implements OnInit {
  score: number = 0;
  maxScore: number = 0;
  password: string = "";

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  ngOnInit() {
    this.score = +this.sharedService.getScore();
    this.maxScore = +this.sharedService.getMaxScore();

    if (this.score == this.maxScore) {
      this.sendRequest();
    }
  }

  private sendRequest() {
    this.http.get<string[]>('assets/docs/Quiz/password.json').subscribe(response => {
      this.password = this.getRandomPassword(response);
    })
  }

  getRandomPassword(passwords: string[]) {
    passwords.sort(() => Math.random() - 0.5);

    return "Twoje hasło: "+passwords[0];
  }
}
