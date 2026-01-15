import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex18Customer } from './ex18-customer';

describe('Ex18Customer', () => {
  let component: Ex18Customer;
  let fixture: ComponentFixture<Ex18Customer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex18Customer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex18Customer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
