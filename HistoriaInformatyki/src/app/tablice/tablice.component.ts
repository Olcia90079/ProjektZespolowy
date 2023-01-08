import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tablice',
  templateUrl: './tablice.component.html',
  styleUrls: ['./tablice.component.css']
})

export class TabliceComponent implements OnInit {
  
  spisTablic: string[]; // Array to store the text files
  currentBoard: string; // Variable to store the text file contents
  index: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.currentBoard = '';
    this.spisTablic = [];
    this.index = 0;
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.index = params['id'];
      this.displayTextFile(this.index);
    });

    this.http.get('assets/docs/Tablice/SpisTablic.json').subscribe((spisTablic: Object) => {
      this.spisTablic = spisTablic as string[];
      const index = this.route.snapshot.params['id'];
      this.displayTextFile(index);
    });
  }

  displayTextFile(index: number) {
    this.http.get(`assets/docs/Tablice/${this.spisTablic[index]}.txt`, { responseType: 'text' }).subscribe(currentBoard => {
      this.currentBoard = currentBoard;
    });
  }

  previousTextFile() {
    if (this.index > 0) {
      this.router.navigate(['/tablica', this.index - 1]);
    } else {
      this.router.navigate(['/tablica', this.spisTablic.length - 1]);
    }
  }

  nextTextFile() {
    if (this.index < this.spisTablic.length - 1) {
      this.router.navigate(['/tablica', this.index + 1]);
    } else {
      this.router.navigate(['/tablica', 0]);
    }
  }

}
