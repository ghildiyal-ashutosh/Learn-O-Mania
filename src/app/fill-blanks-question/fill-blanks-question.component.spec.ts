import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBlanksQuestionComponent } from './fill-blanks-question.component';

describe('FillBlanksQuestionComponent', () => {
  let component: FillBlanksQuestionComponent;
  let fixture: ComponentFixture<FillBlanksQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBlanksQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBlanksQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
