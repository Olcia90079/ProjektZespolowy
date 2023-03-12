import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //quiz -> quiz-score
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

  //quiz-welcome -> quiz
  numElements: number = 3;
  numAnswers: number = 3;
  numTrueAnswers: number = 1;
  no: number = 0;
  page: string = "all";
  title: string = "all pages";

  setNumElements(numElements: number) {
    this.numElements = numElements;
  }
  getNumElements() {
    return this.numElements;
  }

  setNumAnswers(numAnswers: number) {
    this.numAnswers = numAnswers;
  }
  getnumAnswers() {
    return this.numAnswers;
  }

  setNumTrueAnswers(numTrueAnswers: number) {
    this.numTrueAnswers = numTrueAnswers;
  }
  getNumTrueAnswers() {
    return this.numTrueAnswers;
  }

  setNo(no: number) {
    this.no = no;
  }
  getNo() {
    return this.no;
  }

  setPage(page: string) {
    this.page = page;
  }
  getPage() {
    return this.page;
  }

  setTitle(title: string) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }

  constructor() { }
}
