import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player-service.service';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.css']
})
export class PlayerEntryComponent implements OnInit {
  @Output() playersEntered = new EventEmitter();
  playerService: PlayerService;

  constructor(playerService: PlayerService) {
    this.playerService = playerService
   }

  ngOnInit() { }

  playersSubmitted() {
    this.playersEntered.emit();
  }
}
