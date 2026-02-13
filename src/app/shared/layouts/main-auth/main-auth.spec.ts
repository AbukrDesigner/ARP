import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAuth } from './main-auth';

describe('MainAuth', () => {
  let component: MainAuth;
  let fixture: ComponentFixture<MainAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAuth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
