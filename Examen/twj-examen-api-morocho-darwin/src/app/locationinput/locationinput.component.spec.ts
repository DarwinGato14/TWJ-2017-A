import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationinputComponent } from './locationinput.component';

describe('LocationinputComponent', () => {
  let component: LocationinputComponent;
  let fixture: ComponentFixture<LocationinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
