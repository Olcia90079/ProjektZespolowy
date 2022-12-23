import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-tablice',
  templateUrl: './tablice.component.html',
  styleUrls: ['./tablice.component.css']
})
export class TabliceComponent implements OnInit {
  currentBoard?: string;
  totalPages = 10;
  pageSize = 1;
  pageSizeOptions = [1, 2, 5, 10];


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) {
      const idtablicy = this.route.snapshot.params['id'];
      console.log(idtablicy)
    this.httpClient.get('assets/docs/Tablice/'+ idtablicy +".json",  {
      responseType: 'text',
    }).subscribe(
      (dane) => {
        this.currentBoard = dane;
      }
    )

  }

  changePage(event: PageEvent) {
    const pageIndex = event.pageIndex + 1;
    this.httpClient.get(`assets/docs/Tablice/${pageIndex}.json`, {
      responseType: 'text',
    }).subscribe(
      (dane) => {
        this.currentBoard = dane;
      }
    );
  }


  ngOnInit(): void {
  }

}
