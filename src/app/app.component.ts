import { Component } from '@angular/core';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Score Keeper';

  hidePlayerEntry = false;
  hideScoreboard = true;
  players: Player[];

  playersEntered(players: Player[]) {
    this.players = players;
    this.hidePlayerEntry = true;
    this.hideScoreboard = false;
  }
}
