import {Component, OnInit} from '@angular/core';
import {UserManagementService} from '../../admin/service/user-management.service';
import {User} from '../../admin/model/user';

@Component({
  selector: 'app-about-us-home',
  templateUrl: './about-us-home.component.html',
  styleUrls: ['./about-us-home.component.css']
})
export class AboutUsHomeComponent implements OnInit {
  topUser: User[] = [];

  constructor(private userService: UserManagementService) {
  }

  ngOnInit(): void {
    this.findTop();
  }

  findTop() {
    this.userService.findTopUserByPost().subscribe(data => {
      // @ts-ignore
      this.topUser = data;
    });
  }
}
