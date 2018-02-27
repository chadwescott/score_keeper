import { Injectable } from '@angular/core';
import { Player } from './models/player';

@Injectable()
export class PlayerService {
  players: Player[];
  
  constructor() {
    this.initialize(2);
   }

  initialize(numberOfPlayers: number) {
    this.players = new Array<Player>();
    for (let i = 0; i < numberOfPlayers; i++) {
      this.players.push(new Player(''));
    }
  }
  
  updateNumberOfPlayers(numberOfPlayers: number) {
    if (numberOfPlayers >= this.players.length) {
      this.increaseNumberOfPlayers(numberOfPlayers);
    }
    if (numberOfPlayers <= this.players.length) {
      this.decreaseNumberOfPlayers(numberOfPlayers);
    }
  }

  private increaseNumberOfPlayers(numberOfPlayers: number) {
    for (let i = this.players.length; i < numberOfPlayers; i ++) {
      this.players.push(new Player(''));
    }
  }

  private decreaseNumberOfPlayers(numberOfPlayers: number) {
    for (let i = numberOfPlayers; i < this.players.length; i ++) {
      this.players.pop();
    }
  }
}
