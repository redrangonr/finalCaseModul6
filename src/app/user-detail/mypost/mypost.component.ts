import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  myPost: Post[] = [];
  // @ts-ignore
  idUser: number;

  constructor(private postService: PostService) {
    // @ts-ignore
    this.idUser = +sessionStorage.getItem('Id_key');
    this.getMyPost(this.idUser);

  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getMyPost(id: number) {
    this.postService.findAllByUserId(id).subscribe(data => {
      this.myPost = data;
    });
  }
}
