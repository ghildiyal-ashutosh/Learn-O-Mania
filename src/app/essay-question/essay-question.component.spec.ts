import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssayQuestionComponent } from './essay-question.component';

describe('EssayQuestionComponent', () => {
  let component: EssayQuestionComponent;
  let fixture: ComponentFixture<EssayQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssayQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssayQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
