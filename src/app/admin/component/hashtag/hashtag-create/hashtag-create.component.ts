import { Component, OnInit } from '@angular/core';
import {HashtagService} from '../../../service/hashtag.service';
import {Hashtag} from '../../../model/hashtag';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hashtag-create',
  templateUrl: './hashtag-create.component.html',
  styleUrls: ['./hashtag-create.component.css']
})
export class HashtagCreateComponent implements OnInit {
  closeResult = '';
  hashtagForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
  constructor(private hashtagService: HashtagService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `${this.getDismissReason(reason)}`;
    });
  }
  // @ts-ignore
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return '';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    }
  }
  create(){
    const hashtag = {
      name: this.hashtagForm.value.name,
      image: this.hashtagForm.value.image
    }

  }
}
