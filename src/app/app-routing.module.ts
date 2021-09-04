import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetalComponent} from './detail/detal.component';
import {ContactComponent} from './contact/contact.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import { RegisterComponent } from './authentication/component/register/register.component';

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
