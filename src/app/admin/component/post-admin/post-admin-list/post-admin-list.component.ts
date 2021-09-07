import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../../post/service/post.service';
import {Post} from '../../../../model/post';

@Component({
  selector: 'app-post-admin-list',
  templateUrl: './post-admin-list.component.html',
  styleUrls: ['./post-admin-list.component.css']
})
export class PostAdminListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService){ }

  ngOnInit(): void {
    this.getALL()
  }
  getALL(){
    this.postService.getAll().subscribe(data =>{
      this.posts = data
    })
  }
}
