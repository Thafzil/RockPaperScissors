import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  statement: string;
  isWin!: boolean;
  isStarted = false;
  ngOnInit() {}
  player1 = 'Computer';
  player2 = 'Player';
  score1 = 0;
  score2 = 0;
  gameArr = ['Rock', 'Paper', 'Scissor'];
  generateRandom(p2: any) {
    this.player1 = 'Laoding...';
    this.player2 = 'Loading...';
    setTimeout(() => {
      const p1 = Math.floor(Math.random() * 3);
      this.player1 = this.gameArr[p1];
      // const p2 = Math.floor(Math.random() * 3);
      this.player2 = this.gameArr[p2];
      if (p1 != p2) {
        if (p1 > p2) {
          if (p1 == 2 && p2 == 0) {
            this.score2 += 1;
          } else {
            this.score1 += 1;
          }
        } else {
          if (p2 == 2 && p1 == 0) {
            this.score1 += 1;
          } else {
            this.score2 += 1;
          }
        }
      }
    }, 1000);
  }
  finalize() {
    this.isStarted = true;
    if (this.score1 > this.score2) {
      this.isWin = false;
      this.statement = 'Computer wins';
    } else if (this.score2 > this.score1) {
      this.statement = 'You win';
      this.isWin = true;
    } else {
      this.statement = 'Match tied';
      this.isStarted = false;
    }
  }
}
