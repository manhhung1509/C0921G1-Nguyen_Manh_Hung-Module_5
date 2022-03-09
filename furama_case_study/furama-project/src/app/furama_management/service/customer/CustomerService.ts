import {Customer} from '../../model/customer/Customer';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {
   customers: Customer[];

  public getCustomerList() {



    this.customers = [
      {
        id:1,
        customerName: 'Nguyễn Văn Nghĩa',
        customerBirthday: '2000-12-09',
        customerGender: '1',
        customerIdCard: '090879687965',
        customerPhone: '0910980982',
        customerEmail: 'nghia123@gmail.com',
        customerType: {customerTypeId: 1,customerTypeName: 'Diamond'},
        address: 'Thanh Hóa'
      },
      {
        id:2,
        customerName: 'Nguyễn thị Hoa',
        customerBirthday: '1997-09-19',
        customerGender: '0',
        customerIdCard: '09190890989',
        customerPhone: '0911238902',
        customerEmail: 'hoa123@gmail.com',
        customerType: {customerTypeId: 3,customerTypeName: 'Gold'},
        address: 'Quảng Bình'
      },
      {
        id:3,
        customerName: 'Nguyễn Thị Hoài',
        customerBirthday: '1998-03-03',
        customerGender: '0',
        customerIdCard: '091098298769',
        customerPhone: '0911234336',
        customerEmail: 'hoai123@gmail.com',
        customerType: {customerTypeId: 2,customerTypeName: 'Platinum'},
        address: 'Huế'
      },
      {
        id:4,
        customerName: 'Nguyễn Văn Hậu',
        customerBirthday: '1992-11-18',
        customerGender: '1',
        customerIdCard: '09028907909',
        customerPhone: '0910987689',
        customerEmail: 'hau123@gmail.com',
        customerType: {customerTypeId: 4,customerTypeName: 'Silver'},
        address: 'Đà Nẵng'
      },
    ];
    return this.customers;
  }

  public createCustomer(customer: Customer){
    this.customers.push(customer);
    // let customerNew : Customer;
    // customerNew = { customerName: 'hung', id:5, customerGender:'1',customerPhone:'090890897',customerEmail:'hung@gmail.com',customerBirthday:'2000-09-09',address:'Qb',customerIdCard:'909090090',customerType:{customerTypeId:1,customerTypeName:'njdhs'}};
    // this.customers.push(customerNew);
  }


}
