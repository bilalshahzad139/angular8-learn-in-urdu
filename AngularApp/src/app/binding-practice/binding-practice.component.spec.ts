import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPracticeComponent } from './binding-practice.component';

describe('BindingPracticeComponent', () => {
  let component: BindingPracticeComponent;
  let fixture: ComponentFixture<BindingPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
