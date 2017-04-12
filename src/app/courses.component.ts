import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  template: `
<h2>Courses</h2>
{{ title }}
<ul>
  <li *ngFor="let course of courses" myHighlight>
    {{ course }} 
  </li>
</ul>
`,
providers: [CourseService]

})

export class CoursesComponent {
  title = 'The title of courses page';
  courses; // = ['Courses1', 'Courses2', 'Courses3'];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
