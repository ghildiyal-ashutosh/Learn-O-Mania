import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user;
  username = '';
  password = '';
  password2 = '';
  adminstatus = false;

  constructor( private userService: UserServiceClient,
                private router: Router) { }

  register(username, password) {

    if ((this.password !== '' && this.username !== '') && (this.password === this.password2)) {

      this.userService.findUserByUsername(this.username).then((response) => {
        if (response._id === 0) {

          alert('You have been registered successfully' + '    ' + 'LogIn for full access to your profile !!!');
          this.userService
            .createUser(this.username, this.password)
            .then(() => this.router.navigate(['profile']));
        }
        else {
          alert('Username exist in database ...Try Again');
        }
      });
    }

    else {
      alert('Incorrect Entries');
    }
  }




  ngOnInit() {
  }

}
