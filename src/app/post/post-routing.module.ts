import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostViewComponent} from './post-view/post-view.component';
import {PostCreateComponent} from './post-create/post-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: PostListComponent
  },
  {
    path: 'view/:id',
    component: PostViewComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
