import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/Customer';
import {CustomerService} from '../../../service/customer/CustomerService';
import {CustomerType} from '../../../model/customer/CustomerType';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerTypeService} from '../../../service/customer/CustomerTypeService';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  customer: Customer;
  message: string;
  p = 1;
  cusId: string;
  searchName = '';
  searchPhone = '';
  searchAddress = '';
  searchCustomerType = '';
  isSearch = false;
  deleteSuccess = false;
  flagModal = false;
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.cusId = this.activatedRoute.snapshot.params.id;
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
    this.message = Object(this.router.getCurrentNavigation().extras.state).message;
  }

  ngOnInit(): void {
    this.getCustomerTypeList();
    this.getCustomerList();

  }

  public shoModal(id: string, flag: string): void {
    this.cusId = id;
    this.customerService.findCustomerById(id).subscribe(value => {
      this.customer = value;
      if (flag == 'view') {
        this.flagModal = true;
      } else {
        this.flagModal = false;
      }
    });
  }

  public deleteCustomer(id: string): void {
    this.customerService.deleteCustomer(id).subscribe(value => {
      }, error => {
      },
      () => {
        this.ngOnInit();
        this.deleteSuccess = true;
      });
  }


  public getCustomerList() {
    this.deleteSuccess = false;
    this.customerService.getCustomerList().subscribe(value => {
        this.customerList = value;
        this.isSearch = false;
      },
      error => {
        console.log('error get list customer.');
      });
  }

  public getCustomerTypeList() {
    this.customerTypeService.getCustomerTypeList().subscribe(value => {
      this.customerTypeList = value;
    });
  }

  public searchCustomer() {
    this.deleteSuccess = false;
    console.log('a: ' + this.searchName);
    console.log('b: ' + this.searchAddress);
    console.log('c: ' + this.searchPhone);
    console.log('d: ' + this.searchCustomerType);
    this.customerService.searchCustomer(this.searchName, this.searchPhone, this.searchAddress, this.searchCustomerType).subscribe(
      value => {
        this.customerList = value;
        this.isSearch = true;
        this.p = 0;
      }
    );
  }


  getSearchCustomerType($event) {
    this.searchCustomerType = $event.target.value;
    console.log('eve: ' + this.searchCustomerType);
  }
}
