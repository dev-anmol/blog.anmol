import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {content} from '../../models/content';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  private selectCategory = new BehaviorSubject<content>('Home');
  selectedCategory$ = this.selectCategory.asObservable();

  setCategory(category: content){
    this.selectCategory.next(category);
  }
}
