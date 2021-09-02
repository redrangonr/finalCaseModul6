import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../../service/user-management.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserManagementService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.userService.getAll().subscribe(users => {
      // @ts-ignore
      this.users = users;
    } )
  }
}
