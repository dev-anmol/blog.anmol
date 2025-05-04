import {Component, inject, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgSelectModule} from '@ng-select/ng-select';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  imports: [NgSelectModule, FormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent {
  private http = inject(HttpClient);
  title = signal('');
  description = signal('');
  content = signal('');
  image = signal('');
  category = signal('');
  author = signal('');

  availableTags = [
    { name: 'Tech' },
    { name: 'Angular' },
    { name: 'Life' },
    { name: 'Health' }
  ]
  selectedTags: string[] = [];

  addTagFn(name: string) {
    return { name: name };
  }

  setTitle(){

  }

  setDescription() {

  }

  setContent() {

  }

  setImagePath() {

  }

  setCategory() {

  }

  setAuthor() {

  }

}
