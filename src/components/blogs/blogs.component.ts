import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})

export class BlogsComponent implements OnInit{

  private http = inject(HttpClient);
  res$!: Observable<any[]>;
  ngOnInit() {
    this.res$ = this.http.get<any[]>('http://localhost:5000/blogs');
    let result = this.res$.subscribe(data => console.log(data));
  }
}
