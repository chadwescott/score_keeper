import { Component } from '@angular/core';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Score Keeper';

  hidePlayerEntry: boolean;
  hideScoreboard: boolean;
  players: Player[];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.hidePlayerEntry = false;
    this.hideScoreboard = true;
    this.players = [new Player(''), new Player('')];
  }

  reset() {
    this.initialize();
  }

  playersEntered(players: Player[]) {
    this.players = players;
    this.hidePlayerEntry = true;
    this.hideScoreboard = false;
  }
}
