import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13Productevent } from './ex13-productevent';

describe('Ex13Productevent', () => {
  let component: Ex13Productevent;
  let fixture: ComponentFixture<Ex13Productevent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex13Productevent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex13Productevent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
