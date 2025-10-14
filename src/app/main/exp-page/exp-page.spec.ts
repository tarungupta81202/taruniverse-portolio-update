import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPage } from './exp-page';

describe('ExpPage', () => {
  let component: ExpPage;
  let fixture: ComponentFixture<ExpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
