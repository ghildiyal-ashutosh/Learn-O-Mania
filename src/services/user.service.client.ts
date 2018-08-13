  const USER_API_URL = 'http://localhost:3000/api';
//const USER_API_URL = 'https://webdev2-node-server-ashu95.herokuapp.com/api';
import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  logIn = (user) => {
    return fetch ((USER_API_URL + '/login'),
      {
        method : 'POST',
        body : JSON.stringify(user),
        credentials : 'include',
        headers :
          {
            'content-type' : 'application/json'
          }
      }).then(function (response) {

        return response.json();

    });

  }
  currentUser = () =>
    fetch((USER_API_URL + '/profile'),
      {
        credentials: 'include'
      }).then(function (response) {
        return response.json();
        })

  logOut = () => {
    return fetch((USER_API_URL + '/logout'),
      {
        method: 'POST',
        credentials: 'include'
      }).then (function (response) {
      return response;
    });
  }

  createUser (username, password) {
    const credentials = {username: username, password: password};

    return fetch((USER_API_URL + '/register'),
      {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers:
          {'content-type': 'application/json'}
      }).then((response) => response.json());
  }

  updateProfile (profile) {
    return fetch((USER_API_URL + '/profile'),
      {
        method: 'PUT',
        credentials : 'include',
        body: JSON.stringify(profile),
        headers:
          {'content-type' : 'application/json'}
      }).then(function (response) {
        return response.json();
        });
  }

  deleteProfile () {
    return fetch((USER_API_URL + '/profile'),
    {
      method : 'DELETE',
      credentials: 'include'
    }
  ).then(response => response.json());
  }

  findUserByUsername (username) {
    return fetch((USER_API_URL + '/username/' + username))
      .then(function (response) {
        return response.json();
      });
  }
}




