import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:'Introduction',
  loadComponent: ()=> import('../components/intro/intro.component').then(m => m.IntroComponent)
},{
  path:'blogs',
  loadComponent: ()=> import('../components/blogs/blogs.component').then(m => m.BlogsComponent)
},{
  path: '**',
  loadComponent: ()=> import('../components/intro/intro.component').then(m => m.IntroComponent)
}];
