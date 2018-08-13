import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {SectionServiceClient} from '../../services/section.service.client';
import {CourseServiceClient} from '../../services/course.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = { username : ''};
  _id;
  username;
  firstName;
  lastName;
  email;
  contact;
  user = {};
  adminStatus = true;

  sections = [];
  courses = [];



  constructor(private userService: UserServiceClient,
               private sectionService: SectionServiceClient,
              private router: Router,
              private courseService: CourseServiceClient) { }

  logout = () => {

    this.adminStatus = true;
    this.userService.logOut()
      .then(() => this.router.navigate(['login'])
    );
  }

  unenroll(section) {
      const sectionId = section._id;

      if (section.remSeats < section.maxSeats ) {
          this.sectionService.unenrollSection(sectionId)
              .then((status) => {
                  this.sectionService
                      .findSectionsForStudent()
                      .then((sections) => this.sections = sections);
              });
      }
      else {
          alert('You are not enrolled in this course.. ' + 'Seats Filled ='  + section.remSeats + ' '
              + 'Maximum Seats = ' + section.maxSeats );
      }
      }

  update () {
    const profile = {_id: this._id, username: this.username, lastName: this.lastName, firsName: this.firstName,
      email: this.email, contact: this.contact};
    this.userService.updateProfile(profile).then( user => {
      if ( user !== null) {
        alert('Profile Updated');
      }
    });

  }



  ngOnInit() {
    this.userService.currentUser()
      .then(user => {
        if (user !== null) {
          this.adminStatus = false;
          this._id = user._id;
          this.username = user.username;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.contact = user.contact;
          this.email = user.email;
          this.currentUser = user;
        }
        else {
          this._id = -1;
        }
        }).then (() => {
      if (this._id !== -1)  {
        this.adminStatus = false;

        this.sectionService
          .findSectionsForStudent()
          .then(sections => this.sections = sections);

        this.courseService.findAllCourses()
          .then(courses => this.courses = courses);
      }
    });
    }
}



