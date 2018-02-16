import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-score-form',
  templateUrl: './player-score-form.component.html',
  styleUrls: ['./player-score-form.component.css']
})
export class PlayerScoreFormComponent implements OnInit {
  @Input() player: Player;
  @Output() scoreChange = new EventEmitter<string>();
  points: number;

  constructor() { }

  ngOnInit() {
  }

  addPoints() {
    this.player.score += Number(this.points);
    this.scoreChange.emit(this.player.name + ' +' + this.points + ' = ' + this.player.score);
    this.points = null;
  }

  subtractPoints() {
    this.player.score -= Number(this.points);
    this.scoreChange.emit(this.player.name + ' -' + this.points + ' = ' + this.player.score);
    this.points = null;
  }
}
