import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resister } from './resister';

describe('Resister', () => {
  let component: Resister;
  let fixture: ComponentFixture<Resister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
