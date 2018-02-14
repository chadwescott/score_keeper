import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Score Keeper';
  numberOfPlayers = 2;
  players: string[] = ['', ''];

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
