import { Component, OnInit } from '@angular/core';
import {PostService} from '../../post/service/post.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-hot-new',
  templateUrl: './hot-new.component.html',
  styleUrls: ['./hot-new.component.css']
})
export class HotNewComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts: Post[] = []
  ngOnInit(): void {
    this.findTop()
  }

  findTop(){
    this.postService.findTopComment().subscribe(data=>{
      // @ts-ignore
      this.posts = data
    })
  }

}
