import { Component, OnInit } from '@angular/core';
import {SubmissionServiceClient} from '../../services/submission.service.client';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  submissions = [{student: {username: ''}, quiz: {title: ''} , total: '' , score: '', timeStamp: '+-'}] ;
  submissionId = '';
  evalSubmission = {_id: '', timeStamp: '',  score: '',  quiz: {title: ''},
      answers : [{scored: '' , question: {questionText: ' ' , questionType: '' , points: ''}}]};
  viewStatus = true;


  constructor(private subService: SubmissionServiceClient) { }

  selectSubmission(submission) {
    this.submissionId = this.evalSubmission._id;
    this.evalSubmission = submission;
    this.viewStatus = false;
    }

  ngOnInit() {

    this.subService.findAllSubmissionsForStudent()
        .then((submissions) => this.submissions = submissions);
  }

}
