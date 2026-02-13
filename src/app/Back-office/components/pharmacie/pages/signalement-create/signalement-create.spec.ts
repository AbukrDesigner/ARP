import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementCreate } from './signalement-create';

describe('SignalementCreate', () => {
  let component: SignalementCreate;
  let fixture: ComponentFixture<SignalementCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalementCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalementCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
