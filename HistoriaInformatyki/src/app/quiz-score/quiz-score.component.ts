import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent implements OnInit {
  score: number = 0;
  max_score: number = 0;
  public repeat: number[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.score = +this.route.snapshot.queryParams['score'];
    this.max_score = +this.route.snapshot.queryParams['max_score'];
    this.repeat = this.getRepeat(this.score, this.max_score);
  }

  getRepeat(r: number, mr: number) {
    if (r < ((- mr * 2) / 3)) {
      r = 3;
    } else if (r > ((mr * 2) / 3)) {
      r = 1
    } else {
      r = 2;
    }


    for (let i = 0; i < r; i++) {
      this.repeat.push(0);
    }
    return this.repeat;
  }
}
