import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from '../component/admin-home/admin.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {AppModule} from '../../app.module';
import {UserManagementComponent} from '../component/user-list/user-management.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbNavModule,
  ]
})
export class AdminModule { }
