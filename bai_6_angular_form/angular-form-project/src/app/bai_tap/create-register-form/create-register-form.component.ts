import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterValidate} from '../register-validate';

@Component({
  selector: 'app-create-register-form',
  templateUrl: './create-register-form.component.html',
  styleUrls: ['./create-register-form.component.css']
})
export class CreateRegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  countryList: String[];
  registerValidate = new RegisterValidate();

  constructor() {
    this.countryList = this.getCountry();
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      age: new FormControl('', [Validators.required, this.registerValidate.checkAge]),
      gender: new FormControl('', Validators.required),
      groupPassword: new FormGroup(
        {
          passWord: new FormControl('', [Validators.required, Validators.minLength(6)],),
          confirmPassWord: new FormControl('', Validators.required)
        },this.registerValidate.checkPass)
    });
  }

  public getInfoRegisterForm() {
  }

  public getCountry(): string[] {
    return ['China', 'Viet Nam', 'Korea', 'Usa'];
  }

}
