import {Component, HostListener, Input, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {TokenService} from '../../service/token.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CustomvalidationServiceService} from '../../service/customvalidation-service.service';

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

  status :any = 'Please login your account';

  registerForm = this.fb.group({
    username: new FormControl('', Validators.required),
    fullname: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required,),
    address: new FormControl('',Validators.required),
  })

  constructor(
              private loginService: LoginService,
              private tokenService: TokenService,
              private router: Router,
              private modalService: NgbModal,
              private fb: FormBuilder,
              private customValidator: CustomvalidationServiceService) { }

  ngOnInit(): void {
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
  register() {
    const registerForm = {
      username: this.registerForm.value.username,
      fullname: this.registerForm.value.fullname,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      address: this.registerForm.value.address,
    }
    this.loginService.register(registerForm).subscribe(
      (data: any) => {
        alert('sai roi')
        this.registerForm.reset()
      },
      (err: any) => {
        alert('err')
        this.registerForm.reset()
      }
    )
  }
}
