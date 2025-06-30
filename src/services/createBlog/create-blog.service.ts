import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {blogs} from '../../models/blogs';

@Injectable({
  providedIn: 'root'
})
export class CreateBlogService {
  private http = inject(HttpClient);

  public token = sessionStorage.getItem('token') || '';
  public headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  createBlog(blogData: any) {
    return this.http.post('http://localhost:5000/blogs/create', {
      data: blogData,
    },{
      headers : this.headers
    })
  }
}
