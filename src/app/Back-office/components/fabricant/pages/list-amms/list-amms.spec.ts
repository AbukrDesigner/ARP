import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmms } from './list-amms';

describe('ListAmms', () => {
  let component: ListAmms;
  let fixture: ComponentFixture<ListAmms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAmms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAmms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
