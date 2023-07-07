import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreoPressComponent } from './areo-press.component';

describe('AreoPressComponent', () => {
  let component: AreoPressComponent;
  let fixture: ComponentFixture<AreoPressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreoPressComponent]
    });
    fixture = TestBed.createComponent(AreoPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
