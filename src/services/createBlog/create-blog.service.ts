import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateBlogService {
  private http = inject(HttpClient);

  createBlog() {
    return this.http.post('http://localhost:5000/blogs/create', {})
  }
}
