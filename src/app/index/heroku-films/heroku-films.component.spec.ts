import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerokuFilmsComponent } from './heroku-films.component';

describe('HerokuFilmsComponent', () => {
  let component: HerokuFilmsComponent;
  let fixture: ComponentFixture<HerokuFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerokuFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerokuFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
