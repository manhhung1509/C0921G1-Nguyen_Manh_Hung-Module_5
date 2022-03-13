import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/Customer';
import {CustomerService} from '../../../service/customer/CustomerService';
import {CustomerType} from '../../../model/customer/CustomerType';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private customerService: CustomerService,
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
    this.getCustomerList();
  }

  public shoModal(id: string): void {
    this.cusId = id;
    this.customerService.findCustomerById(id).subscribe(value => {
      this.customer = value;
    });
  }

  public deleteCustomer(id: string): void {
    this.customerService.deleteCustomer(id).subscribe(value => {
        console.log('delete customer successfully!');
      }, error => {
      },
      () => {
        this.ngOnInit();
      });
  }


  public getCustomerList() {
    this.customerService.getCustomerList().subscribe(value => {
        this.customerList = value;
        console.log(this.searchName);
      },
      error => {
        console.log('error get list customer.');
      });
  }

  public searchCustomer() {
    console.log(this.searchName);
    console.log('start lenght: ' + this.customerList.length);
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].customerName === this.searchName) {
        console.log("ko xoa");
      }else {
        this.customerList.splice(i, 1);
        console.log('list element: ' + this.customerList[i].customerName);
        console.log('end lenght: ' + this.customerList.length);
      }
    }
  }
}
