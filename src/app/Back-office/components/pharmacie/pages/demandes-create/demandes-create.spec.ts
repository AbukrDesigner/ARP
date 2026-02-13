import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesCreate } from './demandes-create';

describe('DemandesCreate', () => {
  let component: DemandesCreate;
  let fixture: ComponentFixture<DemandesCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandesCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
