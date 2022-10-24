import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDataFormComponent } from './match-data-form.component';

describe('MatchDataFormComponent', () => {
  let component: MatchDataFormComponent;
  let fixture: ComponentFixture<MatchDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
