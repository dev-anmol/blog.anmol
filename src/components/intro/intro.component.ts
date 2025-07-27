import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  signal,
  ViewChild,
  WritableSignal
} from '@angular/core';
import { Subscription } from 'rxjs';
import { content } from '../../models/content';
import { theme } from '../../models/theme';
import { NavigateService } from '../../services/navigation/navigate.service';
import { ThemeService } from '../../services/themeToggle/theme.service';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ResumeComponent } from '../resume/resume.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-intro',
  imports: [
    CommonModule,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent implements OnDestroy {
  contentType: WritableSignal<content> = signal('Home');
  email: string = 'anmolll.thakurrr@gmail.com';
  location: string = 'Dwarka, New Delhi';
  private subscription!: Subscription;
  themeType: WritableSignal<theme> = signal('dark');
  private ctx!: any;
  @ViewChild('introText') introRef!: ElementRef;


  constructor(
    private navigateToSection: NavigateService,
    private theme: ThemeService
  ) {
    this.subscription = this.navigateToSection.selectedCategory$.subscribe(
      (value: content) => {
        this.contentType.set(value);
      }
    );

    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    });
  }

  updateContent(current: content) {
    this.contentType.update((prev) => (prev = current));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
