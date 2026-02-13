import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaiList } from './essai-list';

describe('EssaiList', () => {
  let component: EssaiList;
  let fixture: ComponentFixture<EssaiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssaiList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssaiList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
