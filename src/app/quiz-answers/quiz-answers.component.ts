import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubmissionServiceClient} from '../../services/submission.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  submission = {student: {username: ''} , quiz: {title: ''}, score: '', total: '',
      answers: [ {question: {questionText: ' ' , points: '' , questionType: ' ' }, scored: ' ',
          multipleChoiceAnswer: '', fillBlankAnswers: {var1: '', var2: ''}, trueFalseAnswer: '' ,
          essayAnswer: ''} ]};

  constructor( private activatedRoute: ActivatedRoute,
               private subService: SubmissionServiceClient) {  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
          params => this.subService. findSubmissionForQuizById(params['quizId'], params['submissionId'])
              .then((submissions) => this.submission = submissions));

      
  }

}
