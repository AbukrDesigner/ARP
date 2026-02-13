import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricantList } from './fabricant-list';

describe('FabricantList', () => {
  let component: FabricantList;
  let fixture: ComponentFixture<FabricantList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricantList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricantList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
