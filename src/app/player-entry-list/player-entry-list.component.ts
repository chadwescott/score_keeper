import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-entry-list',
  templateUrl: './player-entry-list.component.html',
  styleUrls: ['./player-entry-list.component.css']
})
export class PlayerEntryListComponent implements OnInit {
  @Input() players: string[] = [];

  constructor() { }

  ngOnInit() { }

  onSubmit() { }
}
