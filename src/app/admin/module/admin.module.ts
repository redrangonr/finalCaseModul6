import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from '../component/admin.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AdminComponent
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
