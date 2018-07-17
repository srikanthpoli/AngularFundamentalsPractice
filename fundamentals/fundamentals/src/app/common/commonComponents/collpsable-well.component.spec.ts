import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollpsableWellComponent } from './collpsable-well.component';

describe('CollpsableWellComponent', () => {
  let component: CollpsableWellComponent;
  let fixture: ComponentFixture<CollpsableWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollpsableWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollpsableWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
