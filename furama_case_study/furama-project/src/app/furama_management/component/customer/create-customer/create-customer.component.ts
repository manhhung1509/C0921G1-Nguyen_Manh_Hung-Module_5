import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/CustomerService';
import {Customer} from '../../../model/customer/Customer';
import {Router} from '@angular/router';
import {CustomerType} from '../../../model/customer/CustomerType';
import {CustomerTypeService} from '../../../service/customer/CustomerTypeService';
import {ValidateCustomerService} from '../../../service/validate/validate_customer/validate-customer.service';

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
  message = false;
  email: string;
  cId: string;
  idCard: string;
  massageEmail: string;
  massageIdCard: string;
  massageCId: string;


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private validateCustomer: ValidateCustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.message = false;
    this.customerDto = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')]),
      customerName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(84+|0)(90|91)[0-9]{7}$')]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
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
    if (this.customerDto.valid && this.massageEmail == '' && this.massageIdCard == '' && this.massageCId == '') {
      this.customer = this.customerDto.value;
      console.log(this.customer);
      this.customerService.createCustomer(this.customer).subscribe(value => {
        this.message = true;
        // this.router.navigateByUrl('customers', {state: {message: 'create customer successfully!'}});
      }, error => {
        console.log('error create customer.');
      });
    } else {
      this.showError();
    }
  }

  public checkEmail() {
    this.validateCustomer.checkEmail(this.email).subscribe((value) => {
        console.log(value);
        if (value[0] != null) {
          this.massageEmail = 'Email was exits!';
        } else {
          this.massageEmail = '';
        }
      }
    );
  }

  public checkCustomerId() {
    this.validateCustomer.checkCustomerId(this.cId).subscribe((value) => {
        console.log(value);
        if (value[0] != null) {
          this.massageCId = 'Customer Id was exits!';
        } else {
          this.massageCId = '';
        }
      }
    );
  }

  public checkIdCard() {
    this.validateCustomer.checkCustomerIdCard(this.idCard).subscribe(value => {
      if (value[0] != null) {
        this.massageIdCard = 'Id card was exits!';
      } else {
        this.massageIdCard = '';
      }
    });
  }
}
