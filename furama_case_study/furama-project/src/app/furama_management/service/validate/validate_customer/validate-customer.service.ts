import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../../model/customer/Customer';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValidateCustomerService {
  API_URL_LIST = 'http://localhost:3000/customerList';
  customer: Customer;
  check = false;

  constructor(private httpClient: HttpClient) {
  }


  public checkEmail(email: string): Observable<Customer> {

    return this.httpClient.get<Customer>(this.API_URL_LIST + '?customerEmail=' + email);
  }

  public checkCustomerId(cId: string): Observable<Customer> {

    return this.httpClient.get<Customer>(this.API_URL_LIST + '?id=' + cId);
  }

  public checkCustomerIdCard(idCard: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL_LIST + '?customerIdCard=' + idCard);
  }
}
