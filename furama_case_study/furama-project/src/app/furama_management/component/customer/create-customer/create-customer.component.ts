import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/CustomerService';
import {Customer} from '../../../model/customer/Customer';
import {Router} from '@angular/router';
import {CustomerType} from '../../../model/customer/CustomerType';
import {CustomerTypeService} from '../../../service/customer/CustomerTypeService';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  customerDto: FormGroup;
  customer: Customer;
  submitted = false;
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerDto = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')]),
      customerName: new FormControl('', Validators.required),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(84+|0)(90|91)[0-9]{7}$')]),
      customerIdCard: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required),
      customerGender: new FormControl('', Validators.required),
      customerBirthday: new FormControl('', Validators.required)
    });

    this.customerTypeService.getCustomerTypeList().subscribe(value => {
      this.customerTypeList = value;
    });
  }

  public showError() {
    if (this.customerDto.invalid) {
      this.submitted = true;
    }
  }

  public createCustomer() {
    if (this.customerDto.valid) {
      this.customer = Object.assign({}, this.customerDto.value);
      console.log('customer: '+this.customer);
      this.customerService.createCustomer(this.customer, this.customerDto.value.customerType).subscribe(value => {
        this.router.navigateByUrl('customers', {state: {message: 'create customer successfully!'}});
      }, error => {
        console.log('error create customer.');
      });
    } else {
      this.showError();
    }
  }
}
