import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleTest } from './controle-test';

describe('ControleTest', () => {
  let component: ControleTest;
  let fixture: ComponentFixture<ControleTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
