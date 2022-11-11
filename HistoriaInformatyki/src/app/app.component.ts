import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HistoriaInformatyki';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.tekstJakiejsTablicy()
      .subscribe(response => console.log(response));
  }

  tekstJakiejsTablicy()
  {
    return this.http.get('/assets/docs/Tablice/1a')
    .pipe(
      switchMap((response: any) => this.http.get(response.pathToFile, {
        responseType: 'text'
      }))
    );
  }
}