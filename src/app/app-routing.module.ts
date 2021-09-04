import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUSComponent} from './about-us/about-us.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutUSComponent
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then(module => module.PostModule)
  },
  // {
  //   path: '**',
  //   component: ErrorComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
