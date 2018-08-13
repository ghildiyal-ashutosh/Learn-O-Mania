import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = [];
  selectedCourse = {id: -1, module: [], title : '' };

  modules = [];
  selectedModule = {id: -1, lessons: [] , title: '' };

  lessons = [];
  selectedLesson = {widgets: [], title: ''};

  widgets = [] ;
  selectedWidget = {};
  moduleStatus = false;
  lessonStatus = false;
  widgetStatus = false;




  constructor(private courseService: CourseServiceClient) {}

  selectCourse(course) {
    this.selectedCourse  = course;
    this.modules = this.selectedCourse.module;
    this.moduleStatus = true;

    }


    selectModule(module) {
      this.selectedModule = module;

      this.lessonStatus = true;
      this.lessons = this.selectedModule.lessons;
    }

    selectLesson(lesson) {
      this.selectedLesson = lesson;
      console.log(this.selectedLesson);

      this.widgetStatus = true;
      this.widgets = this.selectedLesson.widgets;

    }

    selectWidget(widget) {
      this.selectedWidget = widget;
      console.log(widget);
    }


  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
