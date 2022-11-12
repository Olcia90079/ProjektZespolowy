import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HistoriaInformatyki';
  currentBoard?: string;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/docs/Tablice/1a.txt',  {
      responseType: 'text',
    }).subscribe(
      (dane) => {
        this.currentBoard = dane;
      }
    )
  }
}
