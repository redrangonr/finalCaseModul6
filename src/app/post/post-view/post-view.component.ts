import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
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

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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
    });
  }

}
