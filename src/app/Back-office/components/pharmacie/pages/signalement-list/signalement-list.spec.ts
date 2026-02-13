import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementList } from './signalement-list';

describe('SignalementList', () => {
  let component: SignalementList;
  let fixture: ComponentFixture<SignalementList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalementList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalementList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
