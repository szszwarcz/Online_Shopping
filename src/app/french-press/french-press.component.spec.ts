import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchPressComponent } from './french-press.component';

describe('FrenchPressComponent', () => {
  let component: FrenchPressComponent;
  let fixture: ComponentFixture<FrenchPressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrenchPressComponent]
    });
    fixture = TestBed.createComponent(FrenchPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
