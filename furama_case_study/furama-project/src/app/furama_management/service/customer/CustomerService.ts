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

  public searchCustomer(sName: string, sPhone: string, sAddress: string, sCType: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL_LIST + '?customerName_like=' + sName +
      '&customerPhone_like=' + sPhone + '&address_like=' + sAddress + '&customerType.customerTypeName_like=' + sCType
      + '&_sort=customerName&_order=asc');
  }

  public getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL_LIST + '?_sort=customerName&_order=asc');
  }

  public findCustomerById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL_LIST + '/' + id);
  }


  public createCustomer(c: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API_URL_LIST, c);
  }


  public updateCustomer(c: Customer): Observable<void> {
    return this.httpClient.put<void>(this.API_URL_LIST + '/' + c.id, c);
  }

  public deleteCustomer(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_LIST + '/' + id);
  }

}
