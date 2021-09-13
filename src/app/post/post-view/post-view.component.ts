import {Component, OnInit} from '@angular/core';
import {PostService} from '../service/post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../model/post';
import {LikeService} from "../../services/like.service";
import {Like} from "../../model/like";


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  message = '';
  email = new FormGroup({
    detail: new FormControl('', [Validators.required, Validators.email])
  });
  postInstand: Post = {
    user: {},
    hashtag: {}
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
  // @ts-ignore
  id: number;
  // @ts-ignore
  idUser = +sessionStorage.getItem('Id_key');

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private likeService: LikeService) {
    this.activatedRoute.paramMap.subscribe(data => {
      // @ts-ignore
      this.id = +data.get('id');
      this.getById(this.id);
    });
  }

  ngOnInit(): void {
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
        user: new FormControl(data.user.id)
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
        hashtag: data.hashtag
      };
      if (this.postInstand.image === null) {
        this.postInstand.image = 'https://photo-cms-bizlive.zadn.vn/uploaded/ngant/2020_04_05/blog_cwsd_geds.jpg';
      }
      console.log(this.postInstand);
    });
  }
  // tslint:disable-next-line:typedef
  sendEmail() {

    if (this.email.controls?.detail.errors?.required) {
      console.log('required');
      this.message = 'Please fill in the form ';
      // @ts-ignore
    } else if ( this.email.controls?.detail.errors?.email ) {
      console.log('pattern');
      this.message = 'Wrong email';
    } else {
      this.message = 'Success';
      this.postService.shareEmail(this.id, this.email.value.detail).subscribe(() => {
        console.log('ok');
        // window.location.reload();
      });
    }
  }
  // tslint:disable-next-line:typedef
  resetModal() {
    this.message = '';
    // @ts-ignore
    document.getElementById('receiver-email').value = '';
  }

createLike(){
if(sessionStorage.getItem('Id_key')) {
  const like: Like={
    post: {
     id: this.id},
    user: {
      id: this.idUser
    }
  }

  this.likeService.create(like,this.id).subscribe(data => {
    console.log(data);
      alert("thanh cong")
  },error => {alert("loi")}
    )
}
  }

  check() {
    if (sessionStorage.getItem('Id_key')) {
      return false;
    } else {
      return true
    }
  }
}
