import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  scoreLog: string[] = [];

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    if (!this.playerService.playersValid())
      this.router.navigate(['']);
   }

  logScore(event: string) {
    this.scoreLog.splice(0, 0, event);
  }

  reset() {
    this.scoreLog = [];
    this.playerService.initialize(2);
    this.router.navigate(['']);
  }
}
