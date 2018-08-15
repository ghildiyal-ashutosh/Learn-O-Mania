import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../../services/quiz.service.client' ;
import {SubmissionServiceClient} from '../../services/submission.service.client';
import {Router} from '@angular/router';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
    quizzes = [];
    selectedQuiz = {title: '', _id: ''};
    quizName = '';
    numberOfSubmissions;
    submissions = [] ;



    students =  [{student: {username: '' , _id: ''} }];
    studentView = true;

    quizSubmissions = [];
    submissionView = true;

    currentSubmission = [];
    currentView = true;





    constructor(private quizService: QuizServiceClient,
                private subService: SubmissionServiceClient,
                private router: Router) {
    }

    selectQuiz(quiz) {
        this.selectedQuiz = quiz;
    }

    createQuiz() {
        if (this.quizName !== '') {
            const quiz = {title: this.quizName};
            this.quizService.createQuiz(quiz)
                .then(() => {
                    this.findAllQuizzes();
                });
        }
            else
            alert('Quiz name cant be empty ');
    }
    deleteQuiz(quizId) {
        this.quizService.deleteQuiz(quizId)
            .then(() => {
                this.findAllQuizzes();
            });
    }


    findAllQuizzes() {
      this.quizService.findAllQuizzes()
          .then((response) => this.quizzes = response);
    }


    findAllSubmissions () {
        this.subService.findAllSubmissions()
            .then((submissions) => {
                this.submissions = submissions;
                this.numberOfSubmissions = submissions.length;
            });


    }

    quizSubmission(quiz) {
        this.selectedQuiz = quiz;
        console.log(quiz._id);
    }



    getStudents(quiz) {


        this.selectedQuiz = quiz;
         this.subService.findAllSubmissionsForQuiz(this.selectedQuiz._id)
             .then((submissions) => {
                 this.students = submissions;
                 this.studentView = false;
             });
    }

    getSubmissions(quiz) {

        this.selectedQuiz = quiz;

        this.subService.findAllSubmissionsForQuiz(this.selectedQuiz._id)
            .then((submissions) => {
                this.quizSubmissions = submissions;
                this.submissionView = false;
            });
    }

    currentSubmissions(quiz) {
        this.selectedQuiz = quiz;
        this.subService.findAllSubmissionsForStudentForQuiz(this.selectedQuiz._id)
            .then((submission) => this.currentSubmission = submission);

        this.currentView = false;
        }



    ngOnInit() {
        this.findAllQuizzes();
        this.findAllSubmissions();

    }
}



