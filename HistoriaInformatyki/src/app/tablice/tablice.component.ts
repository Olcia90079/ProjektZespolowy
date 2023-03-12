import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

const synth = window.speechSynthesis;

@Component({
  selector: 'app-tablice',
  templateUrl: './tablice.component.html',
  styleUrls: ['./tablice.component.css']
})

export class TabliceComponent implements OnInit {

  spisTablic: string[]; // Array to store the text files
  @Input() currentBoard: string; // Variable to store the text file contents
  audioPlayer: HTMLAudioElement;
  index: number = 0;
  isSpeaking = false;
  isPaused = false;


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.currentBoard = '';
    this.spisTablic = [];
    this.index = 0;
    this.audioPlayer = new Audio();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['id'];
      this.displayTextFile(this.index);
      this.setAudioSource(this.index);
    });

    this.http.get('assets/docs/Tablice/SpisTablic.json').subscribe((spisTablic: Object) => {
      this.spisTablic = spisTablic as string[];
      this.index = this.route.snapshot.params['id'];
      this.displayTextFile(this.index);
      this.setAudioSource(this.index);
    });
  }



  displayTextFile(index: number) {
    this.http.get(`assets/docs/Tablice/${this.spisTablic[index]}.txt`, { responseType: 'text' }).subscribe(currentBoard => {
      this.currentBoard = currentBoard;
    });
  }

  setAudioSource(index: number) {
    this.audioPlayer.src = `assets/docs/Tablice/${this.spisTablic[index]}.mp3`;
  }

  playAudio() {
    this.audioPlayer.play();
  }

  pauseAudio() {
    this.audioPlayer.pause();
  }

  stopAudio() {
    this.audioPlayer.pause();
    this.audioPlayer.currentTime = 0;
  }


  // strzalka do poprzedniej tablicy
  previousTextFile() {
    if (this.index > 0) {
      this.router.navigate(['/tablica', this.index - 1]);
    } else {
      this.router.navigate(['/tablica', this.spisTablic.length - 1]);
    }
  }

  // strzalka do nastepnej tablicy
  nextTextFile() {
    if (this.index < this.spisTablic.length - 1) {
      this.router.navigate(['/tablica', ++this.index]);
    } else {
      this.router.navigate(['/tablica', 0]);
    }
  }

}
