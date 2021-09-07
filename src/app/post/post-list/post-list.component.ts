import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post';
import {HashtagService} from '../../admin/service/hashtag.service';
import {Hashtag} from '../../admin/model/hashtag';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  page = 1;
  count = 0;
  tableSize = 10 ;
  tableSizesArr = [4, 8, 12];
  currentIndex = 1;
  hashtags: Hashtag[] = []
  constructor(private postService: PostService, private hashtagService: HashtagService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllHashtag()
  }
  // tslint:disable-next-line:typedef
  getAll() {
    // @ts-ignore
    this.postService.getAll().subscribe(data => {
      console.log(data)
      this.posts = data;
    });
  }

  getAllByHashtag(){
   // @ts-ignore
    const id = document.getElementById('selectHashtag').value;
    if (id == ''){
      return this.getAll();
    }
    this.postService.findAllByHashtag(id).subscribe(data =>{
      // @ts-ignore
      this.posts = data
    })

  }

  getAllHashtag(){
    this.hashtagService.getAll().subscribe(data=>{
      // @ts-ignore
      this.hashtags = data
    })
  }

  // tslint:disable-next-line:typedef
  findByTitle() {
    // @ts-ignore
    const title = document.getElementById('search').value;
    this.postService.findByTitle(title).subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:no-conditional-assignment
      if (data.length === 0) {
        alert('ko thấy');
      }else {
        this.posts = data;
      }
    });
  }
  tabSize(event: any) {
    this.page = event;
    this.getAll();
  }
  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAll();
  }
}
