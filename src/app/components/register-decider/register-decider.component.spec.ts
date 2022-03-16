import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeciderComponent } from './register-decider.component';

describe('RegisterDeciderComponent', () => {
  let component: RegisterDeciderComponent;
  let fixture: ComponentFixture<RegisterDeciderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDeciderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDeciderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
