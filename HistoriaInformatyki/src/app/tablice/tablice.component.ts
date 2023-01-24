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
  @Input() currentBoard:string; // Variable to store the text file contents
  index: number;
  isSpeaking = false; 
  isPaused = false;


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

    this.speakText();
    this.stopSpeech();
  }



  displayTextFile(index: number) {
    this.http.get(`assets/docs/Tablice/${this.spisTablic[index]}.txt`, { responseType: 'text' }).subscribe(currentBoard => {
      this.currentBoard = currentBoard;
      this.stopSpeech();
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
      this.router.navigate(['/tablica', ++this.index]);
    } else {
      this.router.navigate(['/tablica', 0]);
    }
  }

  speakText() {
    if(!synth.speaking){
        this.isSpeaking = true;
        const utterance = new SpeechSynthesisUtterance(this.currentBoard);
        let polishVoice: SpeechSynthesisVoice|undefined;

        synth.getVoices().forEach(voice => {
            if (voice.lang === 'pl-PL' || voice.lang === 'pl' || voice.lang === 'pl_PL') {
                polishVoice = voice;
            }
        });

        if(polishVoice){
            utterance.voice = polishVoice;
            synth.speak(utterance);
        }else{
            synth.speak(utterance);
            console.log("Polish language not supported");
        }
    }
}
  

  stopSpeech() {
    synth.cancel();
    this.isSpeaking = false;
    this.isPaused = false;
  }

  pauseSpeech() {
    synth.pause();
    this.isPaused = true;
  }

  resumeSpeech() {
    if(synth.paused)
        synth.resume();
    else
        console.log("Speech is not paused");
  }
}
