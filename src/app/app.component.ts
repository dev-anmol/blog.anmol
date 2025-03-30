import {Component, signal, WritableSignal} from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../components/footer/footer.component';
import {NgClass} from '@angular/common';
import {ThemeService} from '../services/themeToggle/theme.service';
import {Subscription} from 'rxjs';
import {theme} from '../models/theme';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, RouterOutlet, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  themeType: WritableSignal<theme> = signal('dark');
  private subscription!:Subscription;

  constructor(private theme: ThemeService) {
    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    })
  }
}
