import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../authentication/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id = this.tokenService.getId()
  name = this.tokenService.getName()
  userName = this.tokenService.getUserName()
  avatar = this.tokenService.getAvatar()
  roles = this.tokenService.getRoles()
  token = this.tokenService.getToken()
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear()
    this.router.navigate(['/home']).then(function(){
      location.reload();
    })
  }
}
