import {Customer} from '../../model/customer/Customer';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CustomerService {
  customer: Customer;
  API_URL_LIST = 'http://localhost:3000/customerList';

  constructor(private httpClient: HttpClient) {
  }

  public getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL_LIST);
  }

  public getCustomerTypeId(cTypeName: string): number {
    let customerTypeIdd: number;
    switch (cTypeName) {
      case 'Diamond': {
        customerTypeIdd = 1;
        break;
      }
      case 'Platinum': {
        customerTypeIdd = 2;
        break;
      }
      case 'Gold': {
        customerTypeIdd = 3;
        break;
      }
      case 'Silver': {
        customerTypeIdd = 4;
        break;
      }
      case 'Member': {
        customerTypeIdd = 5;
        break;
      }
    }
    return customerTypeIdd;
  }

  public createCustomer(c: Customer, cTypeName: string): Observable<void> {
    let customerTypeIdd = this.getCustomerTypeId(cTypeName);
    console.log(cTypeName);
    console.log(customerTypeIdd);

    this.customer = {
      id: c.id,
      customerName: c.customerName,
      customerBirthday: c.customerBirthday,
      customerGender: c.customerGender,
      customerIdCard: c.customerIdCard,
      customerPhone: c.customerPhone,
      customerEmail: c.customerEmail,
      customerType: {customerTypeId: customerTypeIdd, customerTypeName: cTypeName},
      address: c.address
    };
    console.log(this.customer);
    return this.httpClient.post<void>(this.API_URL_LIST, this.customer);
  }

  public findCustomerById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL_LIST + '/' + id);
  }

  public updateCustomer(c: Customer, cTypeName: string): Observable<void> {
    let customerTypeIdd = this.getCustomerTypeId(cTypeName);
    this.customer = {
      id: c.id,
      customerName: c.customerName,
      customerBirthday: c.customerBirthday,
      customerGender: c.customerGender,
      customerIdCard: c.customerIdCard,
      customerPhone: c.customerPhone,
      customerEmail: c.customerEmail,
      customerType: {customerTypeId: customerTypeIdd, customerTypeName: cTypeName},
      address: c.address
    };
    return this.httpClient.put<void>(this.API_URL_LIST + '/' + c.id, this.customer);
  }

  public deleteCustomer(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_LIST + '/' + id);
  }

}
