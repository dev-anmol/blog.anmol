import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {theme} from '../../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme : BehaviorSubject<theme> = new BehaviorSubject<theme>("dark");
  themeListener$ = this.theme.asObservable();

  setTheme(theme: theme) {
    console.log("Called theme service")
    this.theme.next(theme);
  }
}
