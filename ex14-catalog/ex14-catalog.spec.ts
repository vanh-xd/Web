import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex14Catalog } from './ex14-catalog';

describe('Ex14Catalog', () => {
  let component: Ex14Catalog;
  let fixture: ComponentFixture<Ex14Catalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex14Catalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex14Catalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
