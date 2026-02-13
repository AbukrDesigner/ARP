import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaiDetails } from './essai-details';

describe('EssaiDetails', () => {
  let component: EssaiDetails;
  let fixture: ComponentFixture<EssaiDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssaiDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssaiDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
