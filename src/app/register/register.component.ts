import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }
  registerForm = this.fb.group({
    firstName:[''],
    lastName:[''],
    email : [''],
    password : ['']
  })
}
