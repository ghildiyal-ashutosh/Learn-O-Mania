import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from '../services/course.service.client';
import {routing} from './app.routing';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {UserServiceClient} from '../services/user.service.client';
import { SectionsComponent } from './sections/sections.component';
import {SectionServiceClient} from '../services/section.service.client';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AdminComponent } from './admin-homepage/admin.component';
import { CourseListComponent } from './course-list/course-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from '../services/quiz.service.client';
import { QuizComponent } from './quiz/quiz.component';
import { QuizCreatorComponent } from './quiz-creator/quiz-creator.component' ;
import {QuestionServiceClient} from '../services/question.service.client';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import {SubmissionServiceClient} from '../services/submission.service.client';
import { SubmissionComponent } from './submission/submission.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    SectionsComponent,
    EnrollmentComponent,
    AdminComponent,
    CourseListComponent,
    QuizListComponent,
    QuizComponent,
    QuizCreatorComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent,
    EssayQuestionComponent,
    FillBlanksQuestionComponent,
    SubmissionComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserServiceClient,
    CourseServiceClient,
    SectionServiceClient,
      QuizServiceClient,
      QuestionServiceClient,
      SubmissionServiceClient

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
