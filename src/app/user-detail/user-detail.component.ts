import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../admin/service/user-management.service';
import {TokenService} from '../authentication/service/token.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../authentication/service/login.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  // @ts-ignore
  url: firebase.storage.UploadTaskSnapshot;
  title = 'cloudsSorage';
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  fb;
  // @ts-ignore
  downloadURL: Observable<string>;
  addresses: any[] = [];
  active = 1;
  id = this.tokenService.getId()
  name = this.tokenService.getName()
  userName = this.tokenService.getUserName()
  avatar = this.tokenService.getAvatar()
  roles = this.tokenService.getRoles()
  token = this.tokenService.getToken()
  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    roles: new FormControl(''),
    avatar: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    status: new FormControl(''),
    timeCreated: new FormControl('')
  })
  closeResult = '';
  constructor(private storage: AngularFireStorage,private modalService: NgbModal,private userService: UserManagementService, private tokenService: TokenService, private loginService: LoginService) {
    // @ts-ignore
    this.getUser(this.id)
  }
  getUser(id: number){
    return this.userService.findById(id).subscribe((data)=>{
      this.userForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        username: new FormControl(data.username),
        email: new FormControl(data.email),
        password: new FormControl(data.password),
        // @ts-ignore
        roles: new FormControl(data.roles[0].id),
        avatar: new FormControl(data.avatar),
        phone: new FormControl(data.phone),
        address: new FormControl(data.address),
        status: new FormControl(data.status),
        timeCreated: new FormControl(data.timeCreated)
      })
      console.log()
    })
  }

  getAddress(){
    this.loginService.getAddress().subscribe(data=>{
      this.addresses = data
    })
  }
  updateAvatar(){
    const userUpdate: any = {
      id: this.id,
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      roles: [
        {
          id: this.userForm.value.roles
        }
      ],
      avatar: this.fb,
      phone: this.userForm.value.phone,
      address: this.userForm.value.address,
      status: this.userForm.value.status,
      timeCreated: this.userForm.value.timeCreated,
    }
    // @ts-ignore
    this.userService.update(this.id,userUpdate).subscribe((data)=>{
      sessionStorage.setItem('Avatar_key',this.fb)
      alert('Update Success')
      location.reload()
    },error => {
      console.log(error)
    })
  }
  updateInfo() {
    const userUpdate: any = {
      id: this.id,
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      roles: [
        {
          id: this.userForm.value.roles
        }
      ],
      avatar: this.userForm.value.avatar,
      phone: this.userForm.value.phone,
      address: this.userForm.value.address,
      status: this.userForm.value.status,
      timeCreated: this.userForm.value.timeCreated,
    }
    console.log(userUpdate)
    // @ts-ignore
    this.userService.update(this.id,userUpdate).subscribe(()=>{
      alert("Update success")
      location.reload()
    })
  }
  ngOnInit(): void {
    // @ts-ignore

    this.getAddress()
    this.updateAvatar()
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    } else {
      return '';
    }
  }
  onFileSelected(event: any) {
    var n = Date.now();
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
          this.url = url;
          console.log(this.url);
        }
      });
  }
}
