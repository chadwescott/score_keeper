import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.css']
})
export class PlayerSelectComponent implements OnInit {
  @Input() minPlayers: number;
  @Input() maxPlayers: number;
  playerOptions: number[] = [];
  numberOfPlayers: number;

  constructor() { }

  ngOnInit() {
    for (let i = this.minPlayers; i <= this.maxPlayers; i++) {
      this.playerOptions.push(i);
    }
  }

  onSubmit() {
  }
}
