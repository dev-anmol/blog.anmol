import {Component, inject, Input, OnDestroy, signal, WritableSignal} from '@angular/core';
import {blogs} from '../../models/blogs';
import {NgClass} from '@angular/common';
import {ThemeService} from '../../services/themeToggle/theme.service';
import {theme} from '../../models/theme';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-blogcard',
  imports: [
    NgClass
  ],
  templateUrl: './blogcard.component.html',
  styleUrl: './blogcard.component.css'
})
export class BlogcardComponent implements OnDestroy{
  @Input() blog !: blogs;
  private themeService = inject(ThemeService);
  themeType: WritableSignal<theme> = signal('dark');
  private subscription!: Subscription;

  constructor() {
    this.subscription = this.themeService.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
