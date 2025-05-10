import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {blogs} from '../../models/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  getAllBlogs() {
    return this.http.get<blogs[]>('http://localhost:5000/blogs');
  }

  getBlogById(blogId : string) {
    return this.http.get<blogs>(`http://localhost:5000/blogs/${blogId}`);
  }
}
