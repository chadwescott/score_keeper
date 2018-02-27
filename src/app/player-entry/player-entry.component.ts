import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.css']
})
export class PlayerEntryComponent implements OnInit {
  playerService: PlayerService;

  constructor(private router: Router, playerService: PlayerService) {
    this.playerService = playerService
   }

  ngOnInit() { }

  playersSubmitted() {
    this.router.navigate(['scoreboard']);
  }
}
