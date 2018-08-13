const COURSE_API_URL = 'https://webdev-2.herokuapp.com/api/course';

import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch(COURSE_API_URL)
      .then(response => response.json());
  }

  findCourseById(courseId){
    return fetch (COURSE_API_URL + '/findCourse/' + courseId)
      .then (response => response.json());
  }
}

