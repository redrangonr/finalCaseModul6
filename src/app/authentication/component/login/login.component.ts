import {Component, HostListener, Input, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';
import {LoginForm} from '../../model/login-form';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {error} from 'protractor';
import {Template} from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  content: any;
  closeResult = '';
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required, ),
    address: new FormControl('', Validators.required),
  });

  status = 'Please login your account';
  constructor(
              private loginService: LoginService,
              private tokenService: TokenService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  open(content: any)
  {
    this.modalService.open(content , {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `${this.getDismissReason(reason)}`;

    });


  }

  // tslint:disable-next-line:typedef
  openRegister( content: any){
    this.modalService.open(content , {ariaLabelledBy: 'modal-basic-test'}).result.then((result) => {
      console.log(result);
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      console.log(reason);
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

  // tslint:disable-next-line:typedef
  login(){
    const loginForm = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.loginService.login(loginForm).subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:triple-equals
      if (data.token != undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setUserName(data.username);
        this.tokenService.setId(data.id);
        this.tokenService.setAvartar(data.avatar);
        this.tokenService.setRoles(data.roles);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.tokenService.getRoles().length; i++) {
          // tslint:disable-next-line:triple-equals
          if (this.tokenService.getRoles()[i] == 'ADMIN'){
            // tslint:disable-next-line:only-arrow-functions typedef
            this.router.navigate(['/admin']).then(function(){
              location.reload();
            });
          }
          // tslint:disable-next-line:triple-equals
          if (this.tokenService.getRoles()[i] == 'USER'){
            // tslint:disable-next-line:only-arrow-functions typedef
            this.router.navigate(['/home']).then(function(){
              location.reload();
            });
          }
        }
      }
    }, err => {
      console.log(err.status);
      // tslint:disable-next-line:triple-equals
      if (err.status == '401'){
        console.log('Sai tk');
        this.status = 'Please check your account or password';
        this.loginForm.reset();
        // tslint:disable-next-line:align triple-equals
      }if (err.status == '400'){
        this.status = 'Your account has been lock';
      }
    });
  }


  // tslint:disable-next-line:typedef
  register() {
    const registerForm = {
      username: this.registerForm.value.username,
      fullname: this.registerForm.value.fullname,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      address: this.registerForm.value.address,
    };
    this.loginService.register(registerForm).subscribe(
      (data: any) => {
      alert('okie');
      this.registerForm.reset();
      },
      (err: any) => {
        alert('err');
        this.registerForm.reset();
      }
    );
  }
}
