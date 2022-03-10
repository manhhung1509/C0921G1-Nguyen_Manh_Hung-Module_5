import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../service/customer/CustomerService';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerDto: FormGroup

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerDto = new FormGroup({
      id: new FormControl('', )
    });
  }

}
