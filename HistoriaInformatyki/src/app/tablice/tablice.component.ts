import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tablice',
  templateUrl: './tablice.component.html',
  styleUrls: ['./tablice.component.css']
})
export class TabliceComponent implements OnInit {
  currentBoard?: string;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) {
      const idtablicy = this.route.snapshot.params['id'];
      console.log(idtablicy)
    this.httpClient.get('assets/docs/Tablice/'+ idtablicy +".txt",  {
      responseType: 'text',
    }).subscribe(
      (dane) => {
        this.currentBoard = dane;
      }
    )

   }

  ngOnInit(): void {
  }

}
