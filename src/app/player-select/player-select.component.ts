import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.css']
})
export class PlayerSelectComponent implements OnInit {
  @Input() minPlayers: number;
  @Input() maxPlayers: number;
  @ViewChild('f') form: any;
  playerOptions: number[] = [];
  numberOfPlayers: number;

  constructor() { }

  ngOnInit() {
    this.numberOfPlayers = this.minPlayers;
    for (let i = this.minPlayers; i <= this.maxPlayers; i++) {
      this.playerOptions.push(i);
    }
  }

  onSubmit() {
    console.log(this.numberOfPlayers);
  }
}
