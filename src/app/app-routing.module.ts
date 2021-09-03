import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetalComponent} from './detail/detal.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUSComponent} from './shared-module/about-us/about-us.component';
import {ErrorComponent} from './shared-module/error/error.component';
import {AboutUSComponent} from './shared-module/about-us/about-us.component';
import {ErrorComponent} from './shared-module/error/error.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin/module/admin.module').then(module => module.AdminModule)},
  {path: 'login', loadChildren: () => import('./authentication/module/login.module').then(module => module.LoginModule)},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user/:id',
    component: UserDetailComponent
  },
  {
    path: 'detail',
    component: DetalComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutUSComponent
  },
  // {
  //   path: '**',
  //   component: ErrorComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
