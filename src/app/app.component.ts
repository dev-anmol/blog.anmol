import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import LocomotiveScroll from 'locomotive-scroll';
import { Subscription } from 'rxjs';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { theme } from '../models/theme';
import { ThemeService } from '../services/themeToggle/theme.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, RouterOutlet, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  themeType: WritableSignal<theme> = signal('dark');
  private subscription!:Subscription;
  private scroll!: LocomotiveScroll;

  constructor(private theme: ThemeService, private router: Router) {
    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    })
  }

  ngOnInit() {
    window.scrollTo(0,0)
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      this.scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true
      } as any);

      this.scroll.scrollTo(0, {duration: 0})
    }

    initLocomotiveScroll();
  }

  ngOnDestroy(): void {
      if(this.scroll) {
        this.scroll.destroy();
      }
  }




}
