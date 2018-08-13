import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {SectionServiceClient} from '../../services/section.service.client';
import {CourseServiceClient} from '../../services/course.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  user = {};
  id = -1;
  sections = [];
  courses = [];
  viewStatus = true;


  constructor(private userService:    UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService:  CourseServiceClient,
             private router: Router ) { }



              logout() {
                this.viewStatus = true;
                this.userService.logOut()
                  .then(() => this.router.navigate([''])
                  );
              }

 ngOnInit() {
    this.userService
      .currentUser()
      .then((user) => {
        if (user !== null) {
          this.id = user._id;
          this.viewStatus = false;
        }
        else{
          this.id = -1 ;
        }
      }).then (() => {
        if (this.id !== -1) {

          this.sectionService
          .findSectionsForStudent()
            .then ((sections) =>
              this.sections = sections);

          this.courseService.findAllCourses()
          .then(courses => this.courses = courses);


      }
    });
    }
    }

