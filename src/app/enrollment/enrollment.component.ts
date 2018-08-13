import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../../services/section.service.client';
import {CourseServiceClient} from '../../services/course.service.client';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  courses = [];
  selectedCourse = {id : ''};
  sections =  [] ;
  selectedSection = {};

  sectionStatus = true;
  viewStatus = true;


  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) {
  }


  selectCourse(course) {
    this.selectedCourse = course;

    this.sectionStatus = false;

    this.sectionService
      .findSectionsForCourse(course.id)
      .then((sections) => this.sections = sections);
  }


  selectSection(section) {

    this.selectedSection = section;

  }


  enrollSection(section) {

      if (section.remSeats > 0) {
          this.selectedSection = section;
          this.sectionService
              .enrollSection(section._id)
              .then(() => {
                this.sectionService
                      .findSectionsForCourse(this.selectedCourse.id)
                      .then((sections) => this.sections = sections);
              });
      }
      else
        alert('Section is full');
  }

  ngOnInit() {

    this.userService.currentUser()
      .then(user => {
        if (user !== null) {
          this.viewStatus = false;
        }
      });

    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }
}
