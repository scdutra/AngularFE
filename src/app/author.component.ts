import { AuthorService } from './author.service';
import {Component} from '@angular/core';

@Component({
  selector: 'author',
  template: `
<h2>Author</h2>
{{ title }}
<ul>
  <li *ngFor="let author of authors" [myHighlight]="'orange'">
    {{ author }}
  </li>
</ul>
`,
providers: [AuthorService]
})

export class AuthorComponent {
  title = 'The list of the author:';
  authors: string[]; // = ['Author1', 'Author2', 'Author3'];

  constructor(authorService: AuthorService) {
   this.authors = authorService.getAuthors();
  }
}
