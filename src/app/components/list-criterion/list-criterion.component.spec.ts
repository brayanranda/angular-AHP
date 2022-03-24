import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCriterionComponent } from './list-criterion.component';

describe('ListCriterionComponent', () => {
  let component: ListCriterionComponent;
  let fixture: ComponentFixture<ListCriterionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCriterionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
