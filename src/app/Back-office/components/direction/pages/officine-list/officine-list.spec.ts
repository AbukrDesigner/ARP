import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficineList } from './officine-list';

describe('OfficineList', () => {
  let component: OfficineList;
  let fixture: ComponentFixture<OfficineList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficineList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficineList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
