import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { PlayerEntryComponent } from './player-entry/player-entry.component';
import { PlayerEntryListComponent } from './player-entry-list/player-entry-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerSelectComponent,
    PlayerEntryComponent,
    PlayerEntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
