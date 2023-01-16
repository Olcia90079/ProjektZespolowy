import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HomeComponent } from './home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  content: string = '';

  constructor(private http: HttpClient) {
    this.http.get('assets/docs/HomePage/strona_tytulowa.txt', { responseType: 'text' })
      .subscribe(data => this.content = data);
  }
}
