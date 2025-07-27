import { NgClass } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, signal, WritableSignal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import Lenis from '@studio-freight/lenis';
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
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'frontend';
  themeType: WritableSignal<theme> = signal('dark');
  private subscription!: Subscription;
  private lenis!: Lenis;
  private frameId: number = 0;

  constructor(private theme: ThemeService, private router: Router) {
    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    });
  }

  ngAfterViewInit(): void {
    // Add a small delay to ensure DOM is fully rendered
    setTimeout(() => {
      this.initializeLenis();
    }, 100);
  }

  private initializeLenis(): void {
    // Destroy existing instance if it exists
    if (this.lenis) {
      this.lenis.destroy();
    }

    this.lenis = new Lenis({
      duration: 0.7,
      easing: (t: number) => t * (2 - t),
      smoothWheel: true,
      wheelMultiplier: 1.5,
      // Add these options for better performance
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
    });

    // Force refresh after initialization
    requestAnimationFrame(() => {
      this.lenis.resize();
      this.lenis.scrollTo(0, { immediate: true });
    });

    const animate = (time: number) => {
      this.lenis.raf(time);
      this.frameId = requestAnimationFrame(animate);
    };

    this.frameId = requestAnimationFrame(animate);

    // Listen for route changes and refresh Lenis
    this.router.events.subscribe(() => {
      setTimeout(() => {
        if (this.lenis) {
          this.lenis.resize();
        }
      }, 100);
    });
  }

  ngOnDestroy(): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.lenis) {
      this.lenis.destroy();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}