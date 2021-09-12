import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
    passwordForm : FormGroup = this.formBuilder.group({
    password: ['', [Validators.required,Validators.minLength(6)]],
    newPassword: ['', [Validators.required,Validators.minLength(6)]],
    confirmNewPassword: ['', [Validators.required,Validators.minLength(6)]],
    acceptTerms: [false, Validators.requiredTrue]
    })
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  get f(){
    return this.passwordForm.controls
  }

  onSubmit(){

  }
}
