import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScoreFormComponent } from './player-score-form.component';

describe('PlayerScoreFormComponent', () => {
  let component: PlayerScoreFormComponent;
  let fixture: ComponentFixture<PlayerScoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerScoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
