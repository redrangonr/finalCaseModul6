import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../authentication/service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name = this.tokenService.getName()
  id = this.tokenService.getId()
  avatar = this.tokenService.getAvatar()
  token = this.tokenService.getToken()
  role = this.tokenService.getRoles()
  username = this.tokenService.getUserName()
  active = 1;
  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.role)
  }
  logout(){
    let cf = confirm('You want to sign out')
    if (cf){
      sessionStorage.clear()
      this.router.navigate(['/home']).then(function(){
        location.reload()
      })
    }
  }


}
