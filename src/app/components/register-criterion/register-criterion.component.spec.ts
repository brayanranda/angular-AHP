import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCriterionComponent } from './register-criterion.component';

describe('RegisterCriterionComponent', () => {
  let component: RegisterCriterionComponent;
  let fixture: ComponentFixture<RegisterCriterionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCriterionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
