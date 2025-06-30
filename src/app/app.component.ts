import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { theme } from '../models/theme';
import { ThemeService } from '../services/themeToggle/theme.service';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

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

  constructor(private theme: ThemeService) {
    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    })
  }

  ngOnInit() {
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      this.scroll = new LocomotiveScroll();
    }

    initLocomotiveScroll();
  }

  ngOnDestroy(): void {
      if(this.scroll) {
        this.scroll.destroy();
      }
  }




}
