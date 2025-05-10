import {Component, HostListener, signal, WritableSignal} from '@angular/core';
import {CommonModule, NgClass, NgOptimizedImage, ViewportScroller} from '@angular/common'
import {Router, RouterLink} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {NavigateService} from '../../services/navigation/navigate.service';
import {content} from '../../models/content';
import {ThemeService} from '../../services/themeToggle/theme.service';
import {theme} from '../../models/theme';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoPath: WritableSignal<string> = signal('assets/logo.webp');
  hamburger: WritableSignal<string> = signal('assets/hamburger.svg');

  toggleMenu: WritableSignal<boolean> = signal(false);
  darkMode: WritableSignal<boolean> = signal(true);
  isSelected: WritableSignal<boolean> = signal(false);
  themeType: WritableSignal<theme> = signal('dark');
  private subscription!: Subscription;


  constructor(private viewportScroller: ViewportScroller, private router: Router, private navigateToSection: NavigateService, private theme: ThemeService) {
    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value)
    })
}


  navigateToHome() {
    this.router.navigate(['/']);
  }

  updateToggleMenu() {
    //("Called");
    this.toggleMenu.update(prev => !prev);
  }

  toggleButtons() {
    this.darkMode.update(prev => !prev);
  }

  toggleIsMenuSelected() {
    this.isSelected.update(prev => !prev);
  }

  updateNavigation(value: content, sectionId: string) {
    this.navigateToSection.setCategory(value);
    this.toggleMenu.set(false);
    this.isSelected.set(false);

    setTimeout(() => {
      this.scrollToSection(sectionId);
    }, 100);
  }

  updateTheme(theme: theme) {
    this.themeType.update((prev) => prev = theme);
    this.theme.setTheme(this.themeType());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menuElement = document.querySelector('.menu-container');
    if (menuElement && !menuElement.contains(target) && this.toggleMenu()) {
      this.toggleMenu.set(false);
    }
  }

  scrollToSection(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

}
