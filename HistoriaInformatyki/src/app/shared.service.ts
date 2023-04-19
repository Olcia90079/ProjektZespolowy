import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //quiz -> quiz-score
  private score: number = 0;
  private maxScore: number = 0;

  setScore(score: number): void {
    this.score = score;
    localStorage.setItem('score', score.toString());
  }

  getScore() {
    const score = localStorage.getItem('score');
    return score ? parseInt(score, 10) : 0;
  }

  removePoint() {
    this.score -= 1;
    localStorage.setItem('score', this.score.toString());
  }

  addPoint() {
    this.score += 1;
    localStorage.setItem('score', this.score.toString());
  }

  setMaxScore(maxScore: number): void {
    this.maxScore = maxScore;
    localStorage.setItem('maxScore', maxScore.toString());
  }

  getMaxScore() {
    const maxScore = localStorage.getItem('maxScore');
    return maxScore ? parseInt(maxScore, 10) : 0;
  }

  //quiz-welcome -> quiz
  numElements: number = 3;
  numAnswers: number = 3;
  numTrueAnswers: number = 1;
  no: number = 0;
  page: string = "all";
  title: string = "all pages";

  setNumElements(numElements: number): void {
    this.numElements = numElements;
  }
  getNumElements(): number {
    return this.numElements;
  }

  setNumAnswers(numAnswers: number): void {
    this.numAnswers = numAnswers;
  }
  getnumAnswers(): number {
    return this.numAnswers;
  }

  setNumTrueAnswers(numTrueAnswers: number): void {
    this.numTrueAnswers = numTrueAnswers;
  }
  getNumTrueAnswers(): number {
    return this.numTrueAnswers;
  }

  setNo(no: number): void {
    this.no = no;
  }
  getNo(): number {
    return this.no;
  }

  setPage(page: string): void {
    this.page = page;
  }
  getPage(): string {
    return this.page;
  }

  setTitle(title: string): void {
    this.title = title;
  }
  getTitle(): string {
    return this.title;
  }

  constructor() { }
}
