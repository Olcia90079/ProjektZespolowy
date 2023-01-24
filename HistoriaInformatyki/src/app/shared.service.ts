import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  score: number = 0;
  maxScore: number = 0;

  setScore(score: number) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }

  removePoint() {
    this.score -= 1;
  }

  addPoint() {
    this.score += 1;
  }

  setMaxScore(maxScore: number) {
    this.maxScore = maxScore;
  }

  getMaxScore() {
    return this.maxScore;
  }

  constructor() { }
}
