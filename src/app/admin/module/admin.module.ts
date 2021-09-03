import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from '../component/admin-home/admin.component';
import {NgbButtonsModule, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {AppModule} from '../../app.module';
import {UserManagementComponent} from '../component/user-list/user-management.component';
import {UserEditComponent} from '../component/user-edit/user-edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    UserEditComponent
  ],
    exports: [
        AdminComponent,
        UserManagementComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbNavModule,
    NgbButtonsModule,
    NgbTooltipModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
