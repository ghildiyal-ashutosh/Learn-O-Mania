const QUIZ_API_URL = 'http://localhost:3000/api';
import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient  {

    findAllQuizzes() {
        return fetch((QUIZ_API_URL + '/quiz'),{
            credentials: 'include'
        }).then (function (response) {
            return response.json();
        });
    }

    findQuizById(quizId) {
        return fetch((QUIZ_API_URL + '/quiz/' + quizId), {
            credentials: 'include'
        }).then(function (response) {
                      return response.json();

                  });
    }

    createQuiz(quiz) {
        return fetch((QUIZ_API_URL + '/quiz'), {
            method:  'POST',
            body: JSON.stringify(quiz),
            credentials: 'include',
            headers : {
                'content-type' : 'application/json'
            }}).then ((response) => response);
    }

    deleteQuiz(quizId) {
        return fetch((QUIZ_API_URL + '/quiz/' + quizId), {
            method: 'DELETE',
            credentials: 'include'
        }).then((response) => response);
    }

    addQuestion(quizId, questionId)
    {
        return fetch ((QUIZ_API_URL + '/quiz/' + quizId + '/question/' + questionId),{
            method: 'PUT',
            credentials: 'include'
        }).then((response) => response);
    }
}
