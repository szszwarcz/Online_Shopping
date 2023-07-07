import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspressoMachineComponent } from './espresso-machine.component';

describe('EspressoMachineComponent', () => {
  let component: EspressoMachineComponent;
  let fixture: ComponentFixture<EspressoMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspressoMachineComponent]
    });
    fixture = TestBed.createComponent(EspressoMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
