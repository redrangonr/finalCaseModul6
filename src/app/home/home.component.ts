import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  name = sessionStorage.getItem('Name_key')
  token = sessionStorage.getItem('Token_key')
  avatar = sessionStorage.getItem('Avatar_key')
=======
  name = sessionStorage.getItem('Name_key');
  token = sessionStorage.getItem('Token_key');
  avatar = sessionStorage.getItem('Avatar_key');
>>>>>>> 83bc2022c7df455263a061e01b47943ee52fc64a
  constructor() { }

  ngOnInit(): void {
  }

}
