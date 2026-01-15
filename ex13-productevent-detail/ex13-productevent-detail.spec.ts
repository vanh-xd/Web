import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13ProducteventDetail } from './ex13-productevent-detail';

describe('Ex13ProducteventDetail', () => {
  let component: Ex13ProducteventDetail;
  let fixture: ComponentFixture<Ex13ProducteventDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex13ProducteventDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex13ProducteventDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
