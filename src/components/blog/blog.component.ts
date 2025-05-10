import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogsService} from '../../services/blogs/blogs.service';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private blogService = inject(BlogsService);
  blogId !: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.blogId = id;
        this.getBlogById(this.blogId);
      }
    })
  }

  getBlogById(id: string) {
    const res = this.blogService.getBlogById(id);
    res.subscribe(data => console.log(data));
  }

  constructor() {
  }
}
