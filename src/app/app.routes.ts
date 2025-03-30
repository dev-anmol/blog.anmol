import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:'Introduction',
  loadComponent: ()=> import('../components/intro/intro.component').then(m => m.IntroComponent)
},{
  path:'blogs/posts',
  loadComponent: ()=> import('../components/posts/posts.component').then(m => m.PostsComponent)
},{
  path: '**',
  loadComponent: ()=> import('../components/intro/intro.component').then(m => m.IntroComponent)
}];
