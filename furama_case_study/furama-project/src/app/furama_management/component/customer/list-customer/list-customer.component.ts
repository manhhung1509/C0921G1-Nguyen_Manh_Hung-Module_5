import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/Customer';
import {CustomerService} from '../../../service/customer/CustomerService';
import {CustomerType} from '../../../model/customer/CustomerType';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css'],
  providers: [CustomerService]
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  customer: Customer;
  index : number;

  constructor(private customerService: CustomerService) {
    this.customer =  new class implements Customer {
      address: string;
      customerBirthday: string;
      customerEmail: string;
      customerGender: string;
      customerIdCard: string;
      customerName: string;
      customerPhone: string;
      customerType: CustomerType;
      id: number;
    }

  }

  ngOnInit(): void {
    this.customerList = this.customerService.getCustomerList();
  }

  public showModalDelete(customerHtml : Customer, index: number): void{
    this.index = index;
    this.customer = customerHtml;

  }

  public deleteCustomer(index: number): void{
    this.customerList.splice(index, 1);
  }

}
