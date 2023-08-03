import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamesHoffmanMethodComponent } from './james-hoffman-method.component';

describe('JamesHoffmanMethodComponent', () => {
  let component: JamesHoffmanMethodComponent;
  let fixture: ComponentFixture<JamesHoffmanMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JamesHoffmanMethodComponent]
    });
    fixture = TestBed.createComponent(JamesHoffmanMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
