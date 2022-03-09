import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  login: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
      passWord : new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

}
