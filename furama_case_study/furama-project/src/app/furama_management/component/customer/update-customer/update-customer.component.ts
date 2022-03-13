import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer/Customer';
import {CustomerService} from '../../../service/customer/CustomerService';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../../model/customer/CustomerType';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerDto: FormGroup;
  customer: Customer;
  customerType: CustomerType;
  submitted = false;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const customerId = this.activatedRoute.snapshot.params.id;

    this.customer = new class implements Customer {
      address: string;
      customerBirthday: string;
      customerEmail: string;
      customerGender: string;
      customerIdCard: string;
      customerName: string;
      customerPhone: string;
      customerType: CustomerType;
      id: string;
    };

    this.customerType = new class implements CustomerType {
      customerTypeId: number;
      customerTypeName: string;
    };

    this.customerService.findCustomerById(customerId).subscribe(value => {
      this.customer = value;
      this.customerType.customerTypeId = this.customer.customerType.customerTypeId;
      this.customerType.customerTypeName = this.customer.customerType.customerTypeName;
    }, error => {
      console.log('this is error update customer');
    });

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
  }

  public showError() {
    if (this.customerDto.invalid) {
      this.submitted = true;
    }
  }

  public updateCustomer() {
    // console.log('vao updateCustomer()');
    if (this.customerDto.valid) {
      this.customer = Object.assign({}, this.customerDto.value);
      this.customerService.updateCustomer(this.customer, this.customerDto.value.customerType).subscribe(value => {
        this.router.navigateByUrl('customers', {state: {message: 'Update customer successfully!'}});
      }, error => {
        console.log('this is error update customer.');
      });
    } else {
      this.showError();
    }
  }

  public validateCustomer(a: AbstractControl): any{
      let check = a.value;
      console.log('this is check value: '+check)
      return check !== '' ? null : {checkCName: true};
    }
}
