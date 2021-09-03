import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = sessionStorage.getItem('Name_key')
  token = sessionStorage.getItem('Token_key')
  avatar = sessionStorage.getItem('Avatar_key')
  constructor() { }

  ngOnInit(): void {
  }

}
