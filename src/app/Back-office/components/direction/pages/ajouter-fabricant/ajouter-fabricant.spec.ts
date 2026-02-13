import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFabricant } from './ajouter-fabricant';

describe('AjouterFabricant', () => {
  let component: AjouterFabricant;
  let fixture: ComponentFixture<AjouterFabricant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterFabricant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFabricant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
