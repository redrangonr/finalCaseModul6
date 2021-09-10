import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post';
import {PostService} from '../service/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-list-author',
  templateUrl: './post-list-author.component.html',
  styleUrls: ['./post-list-author.component.css']
})
export class PostListAuthorComponent implements OnInit {
  posts: Post[] = [];
  // @ts-ignore
  id: number;
  page = 1;
  count = 0;
  tableSize = 10 ;
  tableSizesArr = [4, 8, 12];
  currentIndex = 1;

  constructor(private postService: PostService,
              private router: Router,
              private acvivatedRouter: ActivatedRoute) {
    this.acvivatedRouter.paramMap.subscribe(data => {
      // @ts-ignore
      this.id = +data.get('id');
    });
    // @ts-ignore
    this.postService.findPostByAuthor(this.id).subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  tabSize(event: any) {
    this.page = event;
  }
  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

}
