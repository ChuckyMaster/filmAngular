import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniatureFilmComponent } from './miniature-film.component';

describe('MiniatureFilmComponent', () => {
  let component: MiniatureFilmComponent;
  let fixture: ComponentFixture<MiniatureFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniatureFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniatureFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
