import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAmms } from './details-amms';

describe('DetailsAmms', () => {
  let component: DetailsAmms;
  let fixture: ComponentFixture<DetailsAmms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsAmms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAmms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
