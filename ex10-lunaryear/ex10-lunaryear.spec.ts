import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10Lunaryear } from './ex10-lunaryear';

describe('Ex10Lunaryear', () => {
  let component: Ex10Lunaryear;
  let fixture: ComponentFixture<Ex10Lunaryear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex10Lunaryear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex10Lunaryear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
