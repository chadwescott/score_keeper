import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.css']
})
export class PlayerEntryComponent implements OnInit {
  numberOfPlayers = 2;
  players: string[] = ['', ''];

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
      this.players.push('');
    }
  }

  private decreaseNumberOfPlayers(numberOfPlayers: number) {
    for (let i = numberOfPlayers; i < this.numberOfPlayers; i ++) {
      this.players.pop();
    }
  }
}
