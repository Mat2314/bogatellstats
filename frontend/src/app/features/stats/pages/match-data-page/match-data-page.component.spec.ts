import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDataPageComponent } from './match-data-page.component';

describe('MatchDataPageComponent', () => {
  let component: MatchDataPageComponent;
  let fixture: ComponentFixture<MatchDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
