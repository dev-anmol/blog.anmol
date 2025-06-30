import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { techFormat } from '../../models/techFormat';
import { content } from '../../models/content';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { Subscription } from 'rxjs';
import { NavigateService } from '../../services/navigation/navigate.service';
import { theme } from '../../models/theme';
import { ThemeService } from '../../services/themeToggle/theme.service';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger, SplitText } from 'gsap/all';

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
export class IntroComponent implements OnDestroy, AfterViewInit, OnInit {
  contentType: WritableSignal<content> = signal('Home');
  email: string = 'anmolll.thakurrr@gmail.com';
  location: string = 'Dwarka, New Delhi';
  private subscription!: Subscription;
  themeType: WritableSignal<theme> = signal('dark');
  private ctx!: any;
  @ViewChild('introText') introRef!: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      // gsap.registerPlugin(SplitText);
      const timeline1 = gsap.timeline();
      timeline1.from([this.introRef.nativeElement, '.logo', '.second', '.content', '.image','.designation','.designation', '.image','.github', '.linkedin', '.x', '.insta'], { opacity: 0, duration: 1, filter: 'blur(10px)', stagger: 0.03 });
    });
  }

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
    this.ctx.revert();
  }
}
