import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/CustomerService';
import {Customer} from '../../../model/customer/Customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  customerDto: FormGroup;
  customer: Customer;
  errorList: string[] = new Array();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerDto = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')]),
      customerName: new FormControl('', Validators.required),
      customerEmail: new FormControl('', [Validators.required,Validators.email]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(84+|0)(90|91)[0-9]{7}$')]),
      customerIdCard: new FormControl('', Validators.required),
    });
  }

  public getInfoForm(){
    // for (const errorElement of this.errorList) {
    //   if (this.customerDto.get('id').hasError('required')){
    //     this.errorList.push('IdRequiredError');
    //   }else {
    //     if (errorElement === 'IdRequiredError'){
    //       this.errorList.
    //     }
    //   }
    //   if (this.customerDto.get('id').hasError('pattern')){
    //     this.errorList.push('IdPatternError');
    //   }
    //   if (this.customerDto.get('customerName').hasError('required')){
    //     this.errorList.push('nameRequiredError');
    //   }
    //   if (this.customerDto.get('customerEmail').hasError('required')){
    //     this.errorList.push('emailRequiredError');
    //   }
    //   if (this.customerDto.get('customerEmail').hasError('email')){
    //     this.errorList.push('emailPatternError');
    //   }
    //   if (this.customerDto.get('customerPhone').hasError('required')){
    //     this.errorList.push('phoneRequiredError');
    //   }
    //   if (this.customerDto.get('customerPhone').hasError('pattern')){
    //     this.errorList.push('phonePatternError');
    //   }
    //   if (this.customerDto.get('customerIdCard').hasError('required')){
    //     this.errorList.push('idCardRequiredError');
    //   }
    //   console.log(errorElement);
    // }

  }
}
