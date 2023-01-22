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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.score = +this.route.snapshot.queryParams['score'];
    this.max_score = +this.route.snapshot.queryParams['max_score'];
  }

}
