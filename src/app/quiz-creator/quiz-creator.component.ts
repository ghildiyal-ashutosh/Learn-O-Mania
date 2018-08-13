import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../../services/question.service.client';

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css']
})
export class QuizCreatorComponent implements OnInit {

  quizId = '';
  questions = [];
  quiz = {title: '', questions: [] };

  constructor(private quizService: QuizServiceClient,
                private activatedRoute: ActivatedRoute,
                private questionService: QuestionServiceClient) {  }

                findAllQuestions() {
                  this.questionService.findAllQuestions()
                      .then((questions) => this.questions = questions);
                }

                addQuestion(questionId) {
                  this.quizService.addQuestion(this.quizId, questionId)
                      .then(() => {
                        alert('question ' + ' ' +  questionId + '  ' + 'added to' + '  ' + this.quiz.title );
                        this.findQuizById();
                      });
                }

                deleteQuestion (questionId) {
                    this.questionService.deleteQuestion(questionId)
                        .then(() => {
                            this.findAllQuestions();
                        });
                }

                     deleteQuestionFromQuiz(questionId){
                      this.quizService.deleteQuestionFromQuiz( this.quizId, questionId)
                          .then( () =>  {
                              this.findQuizById();
                          });
  }
                findQuizById() {
                         this.quizService.findQuizById(this.quizId)
                             .then(quiz => this.quiz = quiz);
                     }

                ngOnInit() {

        this.activatedRoute.params.subscribe(
            params => this.quizId = params['quizId']);

        this.findAllQuestions();

        this.findQuizById();


    }

}
