import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {SectionServiceClient} from '../../services/section.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {until} from 'selenium-webdriver';
import titleIs = until.titleIs;


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {


  title = '';
  remSeats = 0;
  maxSeats = 0;
  sections = [];
  sectionId = '';
  courseId = '';


  selectedCourse = {id: -1, title: ''};
  selectedSection = {};

  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.getSections(params['courseId'])
    );
  }


  getSections(courseId) {
    this.courseId = courseId;
    this.courseService.findCourseById(courseId)
      .then(course => {
        if (course.status !== 400) {
          this.title = course.title + ',' + 'Section';
        }
      });
    this.sectionService
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(title, remSeats, maxSeats) {
    const section = {title, remSeats, maxSeats, courseId: this.courseId};
    this.sectionService
      .createSection(section)
      .then(() => {
        this.getSections(this.courseId);
      });
  }


  setSection(title, remSeats, maxSeats, sectionId) {
    this.sectionId = sectionId;
    this.title = title;
    this.remSeats = remSeats;
    this.maxSeats = maxSeats;
  }

  deleteSection(sectionId) {
    this.sectionService.deleteSection(sectionId)
      .then(() => {
        this.getSections(this.courseId);
      });
  }

  updateSection() {
    const section = { sectionId: this.sectionId, title : this.title,
                    remSeats: this.remSeats, maxSeats: this.maxSeats};

    this.sectionService.updateSection(section)
      .then(() => {
        this.getSections(this.courseId);
      });
  }


  ngOnInit() {
  }
}


