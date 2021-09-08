import { Component, OnInit } from '@angular/core';
import {Post} from '../../../model/post';
import {Hashtag} from '../../../admin/model/hashtag';
import {HashtagService} from '../../../admin/service/hashtag.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PostService} from '../../../post/service/post.service';

@Component({
  selector: 'app-hashtag-post',
  templateUrl: './hashtag-post.component.html',
  styleUrls: ['./hashtag-post.component.css']
})
export class HashtagPostComponent implements OnInit {
  posts: Post[] = [];
  page = 1;
  count = 0;
  tableSize = 10 ;
  tableSizesArr = [4, 8, 12];
  currentIndex = 1;
  hashtags: Hashtag[] = [];
  tag: Hashtag = {} ;
  id: any = 0;
  constructor(private postService: PostService, private hashtagService: HashtagService, private activateRoute: ActivatedRoute ) {
    this.activateRoute.paramMap.subscribe((data: ParamMap) => {
      // @ts-ignore
      this.id = +data.get('id');
      this.getPost(this.id);
      this.getAllHasshtag();
      this.findHashtagbyId(this.id);
    });
  }
  // getHashtag(id: any){
  //   this.hashtagService.findById(id).subscribe(data=>{
  //     this.tag = data;
  //   })
  // }
  // tslint:disable-next-line:typedef
  reload(){

  }
  // tslint:disable-next-line:typedef
  getPost(id: any){
    this.postService.findAllByHashtag(id).subscribe( data => {
      // @ts-ignore
      this.posts = data;
    });
  }
  // tslint:disable-next-line:typedef
  getAllHasshtag(){
    this.hashtagService.getAll().subscribe(data => {
      // @ts-ignore
      this.hashtags = data;
    });
  }
  // tslint:disable-next-line:typedef
   findHashtagbyId(id: any){
    this.hashtagService.findById(id).subscribe(tag => {
      this.tag = tag;
      console.log(this.tag.image);
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
