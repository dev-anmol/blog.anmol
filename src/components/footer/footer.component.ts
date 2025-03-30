import {Component, signal, WritableSignal} from '@angular/core';
import {theme} from '../../models/theme';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../services/themeToggle/theme.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  themeType: WritableSignal<theme> = signal('dark');
  private subscription!: Subscription;

  constructor(private theme: ThemeService) {
    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    })
  }
}
