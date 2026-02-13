import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformiteTest } from './conformite-test';

describe('ConformiteTest', () => {
  let component: ConformiteTest;
  let fixture: ComponentFixture<ConformiteTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConformiteTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformiteTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
