import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceV60Component } from './ice-v60.component';

describe('IceV60Component', () => {
  let component: IceV60Component;
  let fixture: ComponentFixture<IceV60Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IceV60Component]
    });
    fixture = TestBed.createComponent(IceV60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
