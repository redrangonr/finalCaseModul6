import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from '../component/admin-home/admin.component';
import {NgbButtonsModule, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {AppModule} from '../../app.module';
import {UserManagementComponent} from '../component/user/user-list/user-management.component';
import {UserEditComponent} from '../component/user/user-edit/user-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HashtagListComponent} from '../component/hashtag/hashtag-list/hashtag-list.component';
import {HashtagCreateComponent} from '../component/hashtag/hashtag-create/hashtag-create.component';
import {HashtagDeleteComponent} from '../component/hashtag/hashtag-delete/hashtag-delete.component';
import {HashtagEditComponent} from '../component/hashtag/hashtag-edit/hashtag-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    UserEditComponent,
    HashtagListComponent,
    HashtagCreateComponent,
    HashtagDeleteComponent,
    HashtagEditComponent,
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
        NgxPaginationModule,
    ]
})
export class AdminModule { }
