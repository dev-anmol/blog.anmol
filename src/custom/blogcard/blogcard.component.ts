import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import {ProjectCardComponent} from '../projectcard/projectcard.component';
import {blogs} from '../../models/blogs';
import {NgClass} from '@angular/common';
import {ThemeService} from '../../services/themeToggle/theme.service';
import {theme} from '../../models/theme';

@Component({
  selector: 'app-blogcard',
  imports: [
    ProjectCardComponent,
    NgClass
  ],
  templateUrl: './blogcard.component.html',
  styleUrl: './blogcard.component.css'
})
export class BlogcardComponent {
  @Input() blog !: blogs;
  private themeService = inject(ThemeService);
  themeType: WritableSignal<theme> = signal('dark');

  constructor() {
    this.themeService.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    })
  }

}
