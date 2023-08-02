import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetsuKasuyaMethodComponent } from './tetsu-kasuya-method.component';

describe('TetsuKasuyaMethodComponent', () => {
  let component: TetsuKasuyaMethodComponent;
  let fixture: ComponentFixture<TetsuKasuyaMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TetsuKasuyaMethodComponent]
    });
    fixture = TestBed.createComponent(TetsuKasuyaMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
