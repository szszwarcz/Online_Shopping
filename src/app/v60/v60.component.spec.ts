import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V60Component } from './v60.component';

describe('V60Component', () => {
  let component: V60Component;
  let fixture: ComponentFixture<V60Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V60Component]
    });
    fixture = TestBed.createComponent(V60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
