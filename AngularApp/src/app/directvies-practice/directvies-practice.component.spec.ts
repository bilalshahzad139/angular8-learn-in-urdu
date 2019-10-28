import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectviesPracticeComponent } from './directvies-practice.component';

describe('DirectviesPracticeComponent', () => {
  let component: DirectviesPracticeComponent;
  let fixture: ComponentFixture<DirectviesPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectviesPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectviesPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
