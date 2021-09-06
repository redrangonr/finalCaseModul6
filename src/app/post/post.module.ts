import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PostCreateComponent } from './post-create/post-create.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    PostListComponent,
    PostViewComponent,
    PostCreateComponent
  ],
  exports: [
    PostListComponent
  ],
    imports: [
        CommonModule,
        PostRoutingModule,
        ReactiveFormsModule,
        EditorModule,
        NgxPaginationModule
    ]
})
export class PostModule { }
