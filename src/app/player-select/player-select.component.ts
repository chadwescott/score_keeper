import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.css']
})
export class PlayerSelectComponent implements OnInit {
  @Input() numberOfPlayers: number;
  @Input() minPlayers: number;
  @Input() maxPlayers: number;
  @Output() numberOfPlayersChanged = new EventEmitter<number>();
  playerOptions: number[] = [];

  constructor() { }

  ngOnInit() {
    this.numberOfPlayers = this.minPlayers;
    for (let i = this.minPlayers; i <= this.maxPlayers; i++) {
      this.playerOptions.push(i);
    }
  }

  playersChanged() {
    this.numberOfPlayersChanged.emit(this.numberOfPlayers);
  }
}
