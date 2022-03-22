import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeciderComponent } from './list-decider.component';

describe('ListDeciderComponent', () => {
  let component: ListDeciderComponent;
  let fixture: ComponentFixture<ListDeciderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeciderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeciderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
