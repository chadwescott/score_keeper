import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.css']
})
export class PlayerEntryComponent implements OnInit {
  @Input() playerNumber: number;
  player: string;

  constructor() { }

  ngOnInit() {
  }
}
