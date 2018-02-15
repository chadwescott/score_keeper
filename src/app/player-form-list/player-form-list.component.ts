import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-form-list',
  templateUrl: './player-form-list.component.html',
  styleUrls: ['./player-form-list.component.css']
})
export class PlayerFormListComponent implements OnInit {
  @Input() players: Player[];
  @Output() playersEntered = new EventEmitter<Player[]>();

  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    this.playersEntered.emit(this.players);
  }
}
