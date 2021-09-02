import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../authentication/service/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name = this.tokenService.getName()
  avatar = this.tokenService.getAvatar()
  token = this.tokenService.getToken()
  role = this.tokenService.getRoles()
  active = 1;
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    console.log(this.role)
  }

}
