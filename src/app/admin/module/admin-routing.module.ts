import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from '../component/admin-home/admin.component';
import {UserManagementComponent} from '../component/user-list/user-management.component';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'users', component: UserManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
