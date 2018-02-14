import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-form-list',
  templateUrl: './player-form-list.component.html',
  styleUrls: ['./player-form-list.component.css']
})
export class PlayerFormListComponent implements OnInit {
  @Input() players: string[] = [];

  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
  }
}
