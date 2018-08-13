const QUESTION_API_URL = 'http://localhost:3000/api';
import {Injectable} from '@angular/core';


@Injectable()
export class QuestionServiceClient {

    findAllQuestions() {
        return fetch((QUESTION_API_URL + '/question'), {
            credentials : 'include'
        }).then(function(response) {
            return response.json();
        });
    }

}

