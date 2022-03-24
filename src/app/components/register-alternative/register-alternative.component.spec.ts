import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAlternativeComponent } from './register-alternative.component';

describe('RegisterAlternativeComponent', () => {
  let component: RegisterAlternativeComponent;
  let fixture: ComponentFixture<RegisterAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAlternativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
