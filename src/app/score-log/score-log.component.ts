import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-log',
  templateUrl: './score-log.component.html',
  styleUrls: ['./score-log.component.css']
})
export class ScoreLogComponent implements OnInit {
  @Input() entries: string[];

  constructor() { }

  ngOnInit() { }
}
