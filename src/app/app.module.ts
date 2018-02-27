import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerFormListComponent } from './player-form-list/player-form-list.component';
import { PlayerEntryComponent } from './player-entry/player-entry.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { PlayerScoreFormComponent } from './player-score-form/player-score-form.component';
import { ScoreLogComponent } from './score-log/score-log.component';
import { PlayerService } from './player-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PlayerSelectComponent,
    PlayerFormComponent,
    PlayerFormListComponent,
    PlayerEntryComponent,
    ScoreboardComponent,
    PlayerScoreFormComponent,
    ScoreLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
