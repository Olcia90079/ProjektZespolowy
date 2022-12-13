import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  constructor(private http: HttpClient) { }

  pytania: any;

  sendRequest() {
    this.http.get('assets/docs/Quiz/pytania.json', {responseType: 'json'}).subscribe(response => {
      this.pytania = response;
    })
  }

  ngOnInit() {
    this.sendRequest();
  }
}
