import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../service/post.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  title = 'cloudsSorage';
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  fb;
  // @ts-ignore
  downloadURL: Observable<string>;
  post: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl(),
    status: new FormControl(),
    description: new FormControl(),
    content: new FormControl('', [Validators.required]),
    date: new FormControl(),
    user: new FormControl()
  });
  tinymceinit: any;

  constructor(private postService: PostService,
              private storage: AngularFireStorage,
              private router: Router) {
    this.tinymceinit = {
      height: 500,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern',
      ],
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
      image_advtab: true,
      // tslint:disable-next-line:typedef only-arrow-functions
      file_picker_callback(cb: (arg0: any, arg1: { title: string; }) => void, value: any, meta: any) {
        // tslint:disable-next-line:prefer-const
        let input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        // tslint:disable-next-line:typedef only-arrow-functions
        input.onchange = function() {
          // @ts-ignore
          // tslint:disable-next-line:prefer-const
          let file = input.files[0];
          // tslint:disable-next-line:prefer-const
          let reader = new FileReader();
          // tslint:disable-next-line:typedef only-arrow-functions
          reader.onload = function() {
            // tslint:disable-next-line:prefer-const
            let id = 'blobid' + (new Date()).getTime();
            // @ts-ignore
            // tslint:disable-next-line:prefer-const
            let blobCache = tinymce.activeEditor.editorUpload.blobCache;
            // @ts-ignore
            // tslint:disable-next-line:prefer-const
            let base64 = reader.result.split(',')[1];
            // tslint:disable-next-line:prefer-const
            let blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
            cb(blobInfo.blobUri(), {title: file.name});
          };
          reader.readAsDataURL(file);
        };

        input.click();
      }
    };
    console.log(this.getTitle());
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getTitle() {
    // @ts-ignore
    return this.post.get('title');
  }

  // tslint:disable-next-line:typedef
  create() {
    const newPost = this.post.value;
    newPost.user = {id: 1};
    // @ts-ignore
    newPost.date = new Date();
    newPost.image = this.fb;
    console.log(newPost);
    if (newPost.title.trim() === '') {
      alert('title null');
    } else if (newPost.content.trim() === '') {
      alert('content null');
    } else {
      this.postService.create(newPost).subscribe(() => {
        // this.router.navigate(['/post/list']);
        this.post.reset();
      });
    }
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  onFileSelected(event) {

    const n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
}
