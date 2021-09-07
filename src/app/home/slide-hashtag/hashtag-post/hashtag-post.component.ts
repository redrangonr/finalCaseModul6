import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-hashtag-post',
  templateUrl: './hashtag-post.component.html',
  styleUrls: ['./hashtag-post.component.css']
})
export class HashtagPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
