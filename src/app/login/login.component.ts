import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;


  constructor(private router: Router,
              private userService: UserServiceClient) { }

  logIn = (username, password) => {
    const user = {username: username, password: password};
    this.userService.logIn(user)
      .then(user1 => {
        if (user1._id === 0) {
          alert('Log In fail Try again');
        }
        else {
          this.router.navigate(['profile/']);
        }
      });
  }

  ngOnInit() {
  }

}
