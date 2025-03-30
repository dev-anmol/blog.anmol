import {Component, OnDestroy, signal, WritableSignal} from '@angular/core';
import {techFormat} from '../../models/techFormat';
import {content} from '../../models/content';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '../home/home.component';
import {ResumeComponent} from '../resume/resume.component';
import {ProjectsComponent} from '../projects/projects.component';
import {SkillsComponent} from '../skills/skills.component';
import {ContactComponent} from '../contact/contact.component';
import {Subscription} from 'rxjs';
import {NavigateService} from '../../services/navigation/navigate.service';
import {theme} from '../../models/theme';
import {ThemeService} from '../../services/themeToggle/theme.service';

@Component({
  selector: 'app-intro',
  imports: [CommonModule, HomeComponent, ResumeComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnDestroy{

  contentType: WritableSignal<content> = signal("Home");
  email: string = 'anmolll.thakurrr@gmail.com';
  location: string = 'Dwarka, New Delhi';
  private subscription!: Subscription;
  themeType: WritableSignal<theme> = signal('dark');

  constructor(private navigateToSection: NavigateService, private theme: ThemeService) {
    this.subscription = this.navigateToSection.selectedCategory$.subscribe((value: content) => {
      this.contentType.set(value);
    })

    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    })
  }

  updateContent(current: content) {
    this.contentType.update(prev => prev = current);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
