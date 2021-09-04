import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../authentication/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id = this.tokenService.getId();
  name = this.tokenService.getName();
  userName = this.tokenService.getUserName();
  avatar = this.tokenService.getAvatar();
  roles = this.tokenService.getRoles();
  token = this.tokenService.getToken();
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  logout(){
    sessionStorage.clear();
    // tslint:disable-next-line:only-arrow-functions typedef
    this.router.navigate(['/home']).then(function(){
      location.reload();
    });
  }
  // tslint:disable-next-line:typedef
  checkLogin() {
    // @ts-ignore
    if (sessionStorage.getItem('Id_key')) {
      this.router.navigate(['/post/create']);
    }else {
    }
  }

  // tslint:disable-next-line:typedef
  check() {
    if (sessionStorage.getItem('Id_key')) {
      return false;
    }else {
      return true;
    }
  }
}
