import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MochaPotComponent } from './mocha-pot.component';

describe('MochaPotComponent', () => {
  let component: MochaPotComponent;
  let fixture: ComponentFixture<MochaPotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MochaPotComponent]
    });
    fixture = TestBed.createComponent(MochaPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
