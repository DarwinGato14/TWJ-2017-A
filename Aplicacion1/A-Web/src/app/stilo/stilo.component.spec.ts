import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StiloComponent } from './stilo.component';

describe('StiloComponent', () => {
  let component: StiloComponent;
  let fixture: ComponentFixture<StiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
