import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {SectionServiceClient} from '../../services/section.service.client';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  selectedCourse = {};
  courseId = '';
  sections = [];
  courses = [];
  selectedSection = {};
  loginStatus = true;

  constructor( private courseService: CourseServiceClient,
                private sectionService: SectionServiceClient,
                  private userService: UserServiceClient,
                 private router: Router) { }


  selectCourse (course) {

    this.selectedCourse = course;
    this.courseId = course.id;

    this.sectionService
      .findSectionsForCourse(this.courseId)
      .then(sections => this.sections = sections);
  }

  selectSection(section) {
    this.selectedSection = section;
  }

  logout()  {
    this.loginStatus = true;
    this.userService.logOut()
      .then(() => this.router.navigate(['login'])
      );
  }

  ngOnInit() {

    this.userService
         .currentUser()
      .then(user => {
        if (user !== null ) {
          this.loginStatus = false;
          this.courseService
            .findAllCourses()
            .then((courses) => this.courses = courses);
        }
        else {
          alert('Admin Rights Revoked');
        }
        });
  }

}
