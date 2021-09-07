import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../admin/service/user-management.service';
import {TokenService} from '../authentication/service/token.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  active = 1;
  id = this.tokenService.getId()
  name = this.tokenService.getName()
  userName = this.tokenService.getUserName()
  avatar = this.tokenService.getAvatar()
  roles = this.tokenService.getRoles()
  token = this.tokenService.getToken()
  constructor(private userService: UserManagementService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }

}
