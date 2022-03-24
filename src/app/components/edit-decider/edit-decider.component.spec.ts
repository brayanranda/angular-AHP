import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeciderComponent } from './edit-decider.component';

describe('EditDeciderComponent', () => {
  let component: EditDeciderComponent;
  let fixture: ComponentFixture<EditDeciderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeciderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeciderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
