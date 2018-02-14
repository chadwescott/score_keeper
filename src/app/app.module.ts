import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerFormListComponent } from './player-form-list/player-form-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerSelectComponent,
    PlayerFormComponent,
    PlayerFormListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
