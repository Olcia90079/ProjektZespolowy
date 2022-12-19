import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  pytania: any;
  selected: any[] = [];

  constructor(private http: HttpClient) { }

  sendRequest() {
    this.http.get('assets/docs/Quiz/pytania.json', {responseType: 'json'}).subscribe(response => {
      this.pytania = response;
    })
  }

  getRandomElements(array: any[], numElements: number): any[] {
    // Create a copy of the array
    let copy = array.slice();

    // Remove all elements with nr=0 and strona="0"
    copy = copy.filter(item => item.nr !== 0 || item.strona !== "0");

    // Shuffle the copy of the array
    copy.sort(() => Math.random() - 0.5);

    // Return the first numElements elements
    return copy.slice(0, numElements);
  }

  selectRandomElements(numElements: number) {
    this.selected = this.getRandomElements(this.pytania, numElements);
  }

  ngOnInit() {
    this.sendRequest();
  }
}
