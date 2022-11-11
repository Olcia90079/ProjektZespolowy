import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HistoriaInformatyki';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('.link/do/pliku.txt').subscribe(() => 
    {
      console.log('ODEBRALEM WIADOMOSC HTTP')
    })
  }

  tekstJakiejsTablicy(parametr:string)
  {
    
  }
}
