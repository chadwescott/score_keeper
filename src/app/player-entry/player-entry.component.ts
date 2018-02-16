import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.css']
})
export class PlayerEntryComponent implements OnInit {
  @Output() playersEntered = new EventEmitter<Player[]>();
  @Input() numberOfPlayers: number;
  @Input() players: Player[];

  constructor() { }

  ngOnInit() {
  }

  updateNumberOfPlayers(numberOfPlayers: number) {
    if (numberOfPlayers > this.numberOfPlayers) {
      this.increaseNumberOfPlayers(numberOfPlayers);
    }
    if (numberOfPlayers < this.numberOfPlayers) {
      this.decreaseNumberOfPlayers(numberOfPlayers);
    }
    this.numberOfPlayers = numberOfPlayers;
  }

  private increaseNumberOfPlayers(numberOfPlayers: number) {
    for (let i = this.numberOfPlayers; i < numberOfPlayers; i ++) {
      this.players.push(new Player(''));
    }
  }

  private decreaseNumberOfPlayers(numberOfPlayers: number) {
    for (let i = numberOfPlayers; i < this.numberOfPlayers; i ++) {
      this.players.pop();
    }
  }

  playersSubmitted(players: Player[]) {
    this.playersEntered.emit(players);
  }
}
