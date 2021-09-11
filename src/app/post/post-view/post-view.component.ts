import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../model/post';
import {CommmentpostService} from '../../services/commmentpost.service';
import {IComment} from '../../model/comment';
import {AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  postInstand: Post = {
    user: {},
    hashtag: {},
    comment_count: ''
  };
  post: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    image: new FormControl(),
    status: new FormControl(),
    description: new FormControl(),
    content: new FormControl(),
    date: new FormControl(),
    user: new FormControl()
  });
  comments: IComment = {
    text: '',
    id : ''
  };
  commentpost: FormGroup = new FormGroup({
    messages: new FormControl()
  });
  // @ts-ignore
  id: number;
  // @ts-ignore
  idUser = +sessionStorage.getItem('Id_key');

  listComment: any;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage,
              private router: Router,
              private commentService: CommmentpostService) {
    this.activatedRoute.paramMap.subscribe(data => {
      // @ts-ignore
      this.id = +data.get('id');
      this.getById(this.id);
    });
  }

  ngOnInit(): void {
    // this.commentService.getListComment(this.id).subscribe(
    //   (data: any) => {
    //     this.listComment = data;
    //     console.log(this.listComment);
    //   }, (error: any) => {
    //     console.log('false');
    //   }
    // );
    this.getListComment();
  }

  // tslint:disable-next-line:typedef
  getListComment() {
    this.commentService.getListComment(this.id).subscribe(
      (data: any) => {
        this.listComment = data;
        console.log(this.listComment);
      }, (error: any) => {
        console.log('false');
      }
    );

  }
  // tslint:disable-next-line:typedef
  getById(id: number) {
    this.postService.get(id).subscribe(data => {
      this.post = new FormGroup({
        id: new FormControl(data.id),
        title: new FormControl(data.title),
        image: new FormControl(data.image),
        status: new FormControl(data.status),
        description: new FormControl(data.description),
        content: new FormControl(data.content),
        date: new FormControl(data.date),
        user: new FormControl(data.user.id),
        comment_count: new FormControl(data.comment_count)
      });
      this.postInstand = {
        id: data.id,
        title: data.title,
        image: data.image,
        status: data.status,
        description: data.description,
        content: data.content,
        date: data.date,
        user: data.user,
        hashtag: data.hashtag,
        comment_count: data.comment_count
      };
      if (this.postInstand.image === null) {
        this.postInstand.image = 'https://photo-cms-bizlive.zadn.vn/uploaded/ngant/2020_04_05/blog_cwsd_geds.jpg';
      }
      console.log(this.postInstand);
    });
  }


  // tslint:disable-next-line:typedef
  createComment() {

    // console.log(this.id);
    this.comments.text = this.commentpost.controls.messages.value;
    console.log(this.comments.text);
    // console.log( sessionStorage.getItem('Id_key'));
    this.comments.id = sessionStorage.getItem('Id_key');
    this.commentService.createComment(this.id, this.comments).subscribe(
      (data: any) => {
        console.log('done');
        this.commentpost.reset();
        this.getById(this.id);
        this.getListComment();
        alert('done');
      }, (error: any) => {
        console.log('errrorr');
        this.commentpost.reset();
        alert('false');
      }
    );
    // console.log( this.comments);
  }

  deleteComment(id: any) {
    // console.log(id);
    this.commentService.deleteComment(id).subscribe(
      (data: any) => {
        // alert("done");
        this.getById(this.id);
        this.getListComment();
      }, (error: any) => {
        alert('false');
        this.getById(this.id);
        this.getListComment();
      }
    );
  }
}
