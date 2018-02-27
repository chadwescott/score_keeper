import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player-service.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  @Output() resetForm = new EventEmitter();
  scoreLog: string[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() { }

  logScore(event: string) {
    this.scoreLog.splice(0, 0, event);
  }

  reset() {
    this.resetForm.emit();
    this.scoreLog = [];
  }
}
