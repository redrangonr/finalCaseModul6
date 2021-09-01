import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  public user = {
    username : '',
    fullname : '',
    password : '',
    email : '',
    phone : '',
    address : '',
  }


  constructor(
    private userService: UserServiceService,
  ) { }

  ngOnInit(): void {}


  formSubmit() {
    this.userService.addUser(this.user).subscribe(
      (data:any) => {
        console.log(data);
        
        Swal.fire('success done ', 'done', 'success')
      },
      (error:any) => {
        console.log(error);
        Swal.fire('error ', 'error', 'error')
      }
    ) 
  }
}
