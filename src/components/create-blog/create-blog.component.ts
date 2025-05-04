import {Component, inject, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-blog',
  imports: [],
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



  createBlog() {
    return this.http.post('http://localhost:5000/blogs/create', {

    })
  }
}
