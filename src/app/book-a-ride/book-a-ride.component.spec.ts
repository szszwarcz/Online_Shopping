import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookARideComponent } from './book-a-ride.component';

describe('BookARideComponent', () => {
  let component: BookARideComponent;
  let fixture: ComponentFixture<BookARideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookARideComponent]
    });
    fixture = TestBed.createComponent(BookARideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
