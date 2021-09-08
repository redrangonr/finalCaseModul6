import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../../../service/user-management.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  roleName: any = '';
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizesArr = [4, 8, 12];
  currentIndex = 1;
  constructor(private userService: UserManagementService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.userService.getAll().subscribe(users => {
      // @ts-ignore
      this.users = users;
      // @ts-ignore
      console.log(this.roleName)
    } )
  }
  findByUsername(){
    // @ts-ignore
    const key = document.getElementById('key').value
    this.userService.searchByUserName(key).subscribe(data =>{
      // @ts-ignore
      this.users = data;
    })
  }

  tabSize(event: any) {
    this.page = event;
    this.getAll();
  }

  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAll();
  }
}
