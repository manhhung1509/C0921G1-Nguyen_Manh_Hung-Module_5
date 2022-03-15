import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer/Customer';
import {CustomerService} from '../../../service/customer/CustomerService';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../../model/customer/CustomerType';
import {CustomerTypeService} from '../../../service/customer/CustomerTypeService';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerDto: FormGroup;
  customer: Customer;
  customerType: CustomerType;
  customerTypeList: CustomerType[];
  submitted = false;
  message = false;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.message = false;
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

    this.customerTypeService.getCustomerTypeList().subscribe(value => {
      this.customerTypeList = value;
      this.customerService.findCustomerById(customerId).subscribe(value => {
        this.customer = value;
        this.customerDto.setValue(this.customer);
      }, error => {
        console.log('this is error update customer');
      });
    });

    this.customerDto = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')]),
      customerName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(84+|0)(90|91)[0-9]{7}$')]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9,12}$')]),
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
    console.log('vo update');
    if (this.customerDto.valid) {
      console.log('vo update valid');
      this.customer = this.customerDto.value;
      console.log(this.customer);
      this.customerService.updateCustomer(this.customer).subscribe(value => {
        this.message = true;
        // this.router.navigateByUrl('customers', {state: {message: 'Update customer successfully!'}});
      }, error => {
        console.log('this is error update customer.');
      });
    } else {
      this.showError();
      console.log('vo update invalid');
    }
  }
}
