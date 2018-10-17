import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegMinInputComponent } from './deg-min-input.component';

describe('DegMinInputComponent', () => {
  let component: DegMinInputComponent;
  let fixture: ComponentFixture<DegMinInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegMinInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegMinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
