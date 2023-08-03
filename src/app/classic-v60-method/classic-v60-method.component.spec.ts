import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicV60MethodComponent } from './classic-v60-method.component';

describe('ClassicV60MethodComponent', () => {
  let component: ClassicV60MethodComponent;
  let fixture: ComponentFixture<ClassicV60MethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicV60MethodComponent]
    });
    fixture = TestBed.createComponent(ClassicV60MethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
