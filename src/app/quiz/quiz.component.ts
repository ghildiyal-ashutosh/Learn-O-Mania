import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionServiceClient} from '../../services/submission.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = {title: '', questions : [], _id: ''};



  constructor( private quizService: QuizServiceClient,
               private activatedRoute: ActivatedRoute,
               private submissionService: SubmissionServiceClient,
               private router: Router) {}

               submitQuiz(quiz) {

                   this.submissionService
                       .submitQuiz(quiz)
                       .then((response) => {
                           this.router.navigate(['student/submissions']);
                       });
               }

               ngOnInit() {
          this.activatedRoute.params.subscribe(
              params => this.quizService.findQuizById(params['quizId'])
                                   .then((quiz) => this.quiz = quiz));


  }
  }
