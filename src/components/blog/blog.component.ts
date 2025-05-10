import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogsService} from '../../services/blogs/blogs.service';
import {CommonModule} from '@angular/common';
import {blogs} from '../../models/blogs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private blogService = inject(BlogsService);
  private subscription !: Subscription;
  blogId !: string;
  blog: blogs | null = null;

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
    this.subscription = this.blogService.getBlogById(id).subscribe((data: blogs) => this.blog = data);
  }

  themeType(): string {
    return localStorage.getItem('theme') || 'light';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
