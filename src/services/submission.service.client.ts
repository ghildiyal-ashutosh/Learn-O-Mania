import {Injectable} from '@angular/core';

const SUBMISSION_API_URL = 'http://localhost:3000/api' ;


@Injectable ()
export class SubmissionServiceClient   {

    submitQuiz(quiz) {
        return fetch((SUBMISSION_API_URL + '/quiz/' +  quiz._id + '/submission' ), {
            method: 'POST',
            credentials : 'include',
            body: JSON.stringify(quiz),
            headers :
                {'content-type' : 'application/json'}
                })
            .then( function(response) {
            return response.json();
            });
    }

    findAllSubmissionsForStudentForQuiz(quizId) {

        return fetch((SUBMISSION_API_URL + '/quiz/' + quizId + '/submission'), {
            credentials : 'include'
        }).then((function (response) {
            return response.json();
        }));
    }

    findSubmissionById (quizId, submissionId) {
        return fetch ((SUBMISSION_API_URL + '/quiz/' + quizId + '/submission/' + submissionId ), {
            credentials : 'include'
        }).then((function (response) {
            return response.json();
        })) ;
    }

    findAllSubmissionsForQuiz(quizId) {
  return fetch((SUBMISSION_API_URL + '/quiz/' + quizId + '/quizSubmissions'), {
      credentials : 'include'
  }).then((function (response) {
      return response.json();
  }));
    }

    findAllSubmissions()  {
        return fetch((SUBMISSION_API_URL + '/submission'),  {
            credentials : 'include'
        }).then((function (response) {
            return response.json();
        }));
    }

    findAllSubmissionsForStudent()
    {
        return fetch((SUBMISSION_API_URL + '/submission/student'),{
            credentials : 'include'
        }).then((function (response) {
            return response.json();
        }));
    }
}