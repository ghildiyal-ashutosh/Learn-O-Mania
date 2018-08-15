import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {AdminComponent} from './admin-homepage/admin.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseListComponent} from './course-list/course-list.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuizCreatorComponent} from './quiz-creator/quiz-creator.component';
import {SubmissionComponent} from './submission/submission.component';
import {QuizSubmissionsComponent} from './quiz-submissions/quiz-submissions.component';
import {QuizAnswersComponent} from './quiz-answers/quiz-answers.component';

const appRoutes: Routes = [
  {path: 'courses',  component:    CourseListComponent},
  {path: 'login',    component:    LoginComponent},
  {path: 'register', component:    RegisterComponent},
  {path: 'profile',  component:    ProfileComponent},
  {path: 'course/:courseId/section', component:    SectionsComponent},
  {path: 'enrollment', component:  EnrollmentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: WhiteBoardComponent},
  {path: '', redirectTo: 'home', pathMatch : 'full'},
  {path: 'home' , component:  WhiteBoardComponent},
    {path: 'quizzes' , component: QuizListComponent},
    {path: 'quiz/:quizId' , component: QuizComponent},
    {path: 'editQuiz/:quizId', component: QuizCreatorComponent},
    {path: 'student/submissions', component: SubmissionComponent},
    {path: 'quizzes/submissions' , component : QuizListComponent},
    {path: 'quizzes/students' , component : QuizListComponent},
    {path: 'quizzes/currentUser/submission', component: QuizListComponent},
    {path: 'quiz/:quizId/submissions' , component : QuizSubmissionsComponent},
    {path: 'quiz/:quizId/submission/:submissionId' , component : QuizAnswersComponent}
];



export const routing = RouterModule.forRoot(appRoutes);
