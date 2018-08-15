import { Component, OnInit } from '@angular/core';
import {SubmissionServiceClient} from '../../services/submission.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  submissions = [{student: {username: ''} , timeStamp: '', quiz: {title: ''}, score: '', answers: []}];

  studentName;
  quizId = '';

  selectedSubmissionId = '';

  viewStatus = true;

  studentSubmissions = [{student: {username: ''} , timeStamp: '' , score: '', answers: []   }];






  constructor(private subService: SubmissionServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


              selectSubmission(submission) {
              this.selectedSubmissionId = submission._id;
              }

              searchStudent() {
                  if (this.studentName !== '') {
                      this.viewStatus = false;
                      this.studentSubmissions = this.submissions.filter ((submission) => {
                          if (submission.student.username === this.studentName) {
                              return submission;
                          }
                      });
                  }
                  else alert('Cant search an empy name');
              }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
          params => this.subService.findAllSubmissionsForQuiz(params['quizId'])
              .then((submissions) => this.submissions = submissions));

      this.activatedRoute.params.subscribe(
          params => this.quizId = (params['quizId'])) ;


  }
}
