import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { PlayerService } from '../player-service.service';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.css']
})
export class PlayerSelectComponent implements OnInit {
  @Input() minPlayers: number;
  @Input() maxPlayers: number;
  numberOfPlayers: number;
  playerOptions: number[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.numberOfPlayers = this.playerService.players.length;
    for (let i = this.minPlayers; i <= this.maxPlayers; i++) {
      this.playerOptions.push(i);
    }
  }

  playersChanged() {
    this.playerService.updateNumberOfPlayers(this.numberOfPlayers);
  }
}
