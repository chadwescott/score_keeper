import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  @Input() players: Player[];
  scoreLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  logScore(event: string) {
    this.scoreLog.splice(0, 0, event);
  }
}
