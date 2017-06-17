import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipocComponent } from './equipoc.component';

describe('EquipocComponent', () => {
  let component: EquipocComponent;
  let fixture: ComponentFixture<EquipocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
