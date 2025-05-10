import {Component, inject, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {Subscription} from 'rxjs';
import {BlogsService} from '../../services/blogs/blogs.service';
import {BlogcardComponent} from '../../custom/blogcard/blogcard.component';
import {blogs} from '../../models/blogs';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    BlogcardComponent
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})

export class BlogsComponent implements OnInit, OnDestroy {

  private blogService = inject(BlogsService);
  myBlogs: WritableSignal<blogs[]> = signal<blogs[]>([]);
  private subscription !: Subscription;
  isLoading: boolean = true;

  ngOnInit() {
    this.subscription = this.blogService.getAllBlogs().subscribe(data => {
      this.isLoading = false;
      this.myBlogs.set(data);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
