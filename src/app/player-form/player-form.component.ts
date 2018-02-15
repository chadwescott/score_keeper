import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  @Input() player: Player;
  @Input() playerNumber: number;

  constructor() { }

  ngOnInit() {
  }
}
