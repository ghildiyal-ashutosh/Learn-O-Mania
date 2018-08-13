import {Injectable} from '@angular/core';

const SUBMISSION_API_URL = 'http://localhost:3000/api' ;


@Injectable ()
export class SubmissionServiceClient {

    submitQuiz(quiz) {
        return fetch((SUBMISSION_API_URL + '/quiz/' +  quiz._id + '/submission' ),{
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
}