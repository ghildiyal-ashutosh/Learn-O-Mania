import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../../services/quiz.service.client' ;

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
    quizzes = [];
    selectedQuiz = {};
    quizName = '';

    constructor(private quizService: QuizServiceClient) {
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

    ngOnInit() {
        this.findAllQuizzes();

    }
}



