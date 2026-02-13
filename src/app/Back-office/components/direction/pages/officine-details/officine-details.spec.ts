import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficineDetails } from './officine-details';

describe('OfficineDetails', () => {
  let component: OfficineDetails;
  let fixture: ComponentFixture<OfficineDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficineDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficineDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
