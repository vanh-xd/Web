import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcustomerhttp } from './listcustomerhttp';

describe('Listcustomerhttp', () => {
  let component: Listcustomerhttp;
  let fixture: ComponentFixture<Listcustomerhttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listcustomerhttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcustomerhttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
