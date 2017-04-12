import { AuthorComponent } from './author.component';
import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';


// root component, toma el control de toda la página.
@Component({
  selector: 'app-root',
  template: '<h1>Academy</h1><courses></courses><author></author>'
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
