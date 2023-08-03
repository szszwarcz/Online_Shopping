import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaoSpinMethodComponent } from './rao-spin-method.component';

describe('RaoSpinMethodComponent', () => {
  let component: RaoSpinMethodComponent;
  let fixture: ComponentFixture<RaoSpinMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaoSpinMethodComponent]
    });
    fixture = TestBed.createComponent(RaoSpinMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
