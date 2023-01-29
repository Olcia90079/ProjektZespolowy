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

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.score = +this.sharedService.getScore();
    this.maxScore = +this.sharedService.getMaxScore();
  }
}
