import {Component, Input, signal, WritableSignal} from '@angular/core';
import {theme} from '../../models/theme';
import {ThemeService} from '../../services/themeToggle/theme.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-projectcard',
  imports: [
    NgClass
  ],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.css'
})
export class ProjectCardComponent {
  @Input() id !: number;
  @Input() imgUrl !: string;
  @Input() title !: string;
  @Input() description !: string;
  @Input() projectUrl !: string;
  themeType: WritableSignal<theme> = signal('dark');

  constructor(private theme: ThemeService) {
    this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    })
  }

}
