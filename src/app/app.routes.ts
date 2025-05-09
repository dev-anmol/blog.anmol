import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:'Introduction',
  loadComponent: ()=> import('../components/intro/intro.component').then(m => m.IntroComponent)
},{
  path:'blogs',
  loadComponent: ()=> import('../components/blogs/blogs.component').then(m => m.BlogsComponent)
},{
  path: 'blogs/:id',
  loadComponent: () => import('../components/blog/blog.component').then(m => m.BlogComponent)
},{
  path: 'create',
  loadComponent: () => import('../components/login/login.component').then(m => m.LoginComponent)
},{
  path: 'create-blog',
  loadComponent: () => import('../components/create-blog/create-blog.component').then(m => m.CreateBlogComponent)
},{
  path: '**',
  loadComponent: ()=> import('../components/intro/intro.component').then(m => m.IntroComponent)
}];
