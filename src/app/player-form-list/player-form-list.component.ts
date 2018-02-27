import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player-service.service';

@Component({
  selector: 'app-player-form-list',
  templateUrl: './player-form-list.component.html',
  styleUrls: ['./player-form-list.component.css']
})
export class PlayerFormListComponent implements OnInit {
  @Output() playersEntered = new EventEmitter();

  constructor(private playerService: PlayerService) { }

  ngOnInit() { }

  onSubmit() {
    this.playersEntered.emit();
  }
}
