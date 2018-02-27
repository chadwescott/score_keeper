import { Component } from '@angular/core';
import { Player } from './models/player';
import { PlayerService } from './player-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Score Keeper';

  hidePlayerEntry: boolean;
  hideScoreboard: boolean;

  constructor(private playerService: PlayerService) {
    this.initialize();
  }

  initialize() {
    this.hidePlayerEntry = false;
    this.hideScoreboard = true;
    this.playerService.initialize(2);
  }

  reset() {
    this.initialize();
  }

  playersEntered() {
    this.hidePlayerEntry = true;
    this.hideScoreboard = false;
  }
}
