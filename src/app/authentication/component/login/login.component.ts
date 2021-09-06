import {Component, HostListener, Input, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {TokenService} from '../../service/token.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RegisterForm} from '../../model/register-form';
import {error} from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  content: any;
  closeResult = '';
  submitted = false;
  addresses : any[] = [];
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  status :any = 'Please login your account';
  statusRegister: any ='';

  registerForm : any = this.fb.group({
    username: ['', Validators.required ],
    name: ['', Validators.required ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(
              private loginService: LoginService,
              private tokenService: TokenService,
              private router: Router,
              private modalService: NgbModal,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAddress()
  }

  get f() {return this.registerForm.controls; }

  getAddress(){
    this.loginService.getAddress().subscribe(data =>{
      this.addresses = data
      console.log(data[0].name)
    })
  }

  open(content: any)
  {
    this.modalService.open(content , {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return '';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    } else {
      return '';
    }
  }


  login(){
    const loginForm = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.loginService.login(loginForm).subscribe(data =>{
      if (data.token){
        this.tokenService.setToken(data.token)
        this.tokenService.setName(data.name)
        this.tokenService.setUserName(data.username)
        this.tokenService.setId(data.id)
        this.tokenService.setAvartar(data.avatar)
        this.tokenService.setRoles(data.roles)
        console.log(this.tokenService.setRoles(data.roles))
        for (let i = 0; i < this.tokenService.getRoles().length; i++) {
          console.log(this.tokenService.getRoles()[i])
          if (this.tokenService.getRoles()[i] == 'ADMIN'){
           this.router.navigate(['/admin']).then(function(){
             location.reload();
           })
          }
          if (this.tokenService.getRoles()[i] == 'USER'){
            location.reload()
          }
        }
      }
    },err => {
      console.log(err.status)
      console.log(err)
      console.log(err.statusText)
      if (err.status == '401' || err.status == '400') {
        console.log('Sai tk');
        this.status = ' <img src="../assets/images/wrong' +
          '.gif" width="30" height="30"> Please check your account or password'
        this.loginForm.reset()
      }
      if (err.status == '423') {
        // @ts-ignore
        this.status = `<img src="../assets/images/lock.gif" width="30" height="30"> Your account has been locked`
        this.loginForm.reset()
      }
    })
  }
  isValidated(register: RegisterForm ){
    return register.name != '' && register.username != '' && register.email != '' && register.password != '' && register.roles != []
  }
  register() {
    this.submitted = true;
    const registerForm : any = {
      username: this.registerForm.value.username,
      name: this.registerForm.value.name,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      roles: ["user"]
    }
    if (this.isValidated(registerForm)) {
      this.loginService.register(registerForm).subscribe(
        (data) => {
          if (data.message == 'nouser'){
            this.statusRegister = '<span  class="alert alert-danger"><img src="../../../../assets/images/sad1.gif" height="35" width="35"> Your Username is duplicate</span>'
          }if (data.message == 'noemail'){
            this.statusRegister = '<span  class="alert alert-danger"><img src="../../../../assets/images/sad1.gif" height="35" width="35"> Your Email is duplicate</span>'
          }if (data.message == 'yes'){
            this.statusRegister = '<span  class="alert alert-success"><img src="../../../../assets/images/success.gif" width="35" height="35"> Success</span> '
          }
        }, err=> {
          console.log(err)
        }
      )
    }
  }
}
