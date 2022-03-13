import {CustomerType} from '../../model/customer/CustomerType';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CustomerTypeService {
  URL_API = "http://localhost:3000/customerTypeList"

  constructor(private httpClient: HttpClient) {
  }

  public getCustomerTypeList(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.URL_API);
  }
}
