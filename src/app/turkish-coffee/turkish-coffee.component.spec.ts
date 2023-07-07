import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkishCoffeeComponent } from './turkish-coffee.component';

describe('TurkishCoffeeComponent', () => {
  let component: TurkishCoffeeComponent;
  let fixture: ComponentFixture<TurkishCoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurkishCoffeeComponent]
    });
    fixture = TestBed.createComponent(TurkishCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
