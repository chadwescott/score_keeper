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
  @Output() scoreChanged = new EventEmitter<string>();
  points: number;

  constructor() { }

  ngOnInit() {
  }

  addPoints() {
    if (isNaN(this.points))
    {
      this.points = null;
      return;
    }

    var score = this.player.score;
    this.player.score += Number(this.points);
    this.scoreChanged.emit(this.player.name + ': ' + score + ' + ' + this.points + ' = ' + this.player.score);
    this.points = null;
  }

  subtractPoints() {
    var score = this.player.score;
    this.player.score -= Number(this.points);
    this.scoreChanged.emit(this.player.name + ': ' + score + ' - ' + this.points + ' = ' + this.player.score);
    this.points = null;
  }
}
