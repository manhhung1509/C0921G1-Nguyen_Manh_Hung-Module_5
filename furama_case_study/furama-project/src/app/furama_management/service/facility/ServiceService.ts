import {Service} from '../../model/service/Service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



const API_URL_LIST = 'http://localhost:3000/serviceList';

@Injectable()
export class ServiceService {
  service: Service;



  constructor(private httpClient: HttpClient) {
  }

  public getServiceList(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(API_URL_LIST);
  }

   createService(service): Observable<Service> {
    return this.httpClient.post<Service>(API_URL_LIST, service);
  }

  findCustomerById(id: number): Observable<Service> {
    return this.httpClient.get<Service>(API_URL_LIST + '/' + id);
  }

  deleteService(id: number): Observable<void> {
    return this.httpClient.delete<void>(API_URL_LIST + '/' + id);
  }

}
