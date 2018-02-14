import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEntryListComponent } from './player-entry-list.component';

describe('PlayerEntryListComponent', () => {
  let component: PlayerEntryListComponent;
  let fixture: ComponentFixture<PlayerEntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEntryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
