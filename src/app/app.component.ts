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

  constructor(private playerService: PlayerService) {
    this.reset();
  }

  reset() {
    this.playerService.initialize(2);
  }
}
