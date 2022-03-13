import {ServiceType} from '../../model/service/ServiceType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceTypeService {

  URL_API = "http://localhost:3000/serviceTypeList"

  constructor(private httpClient: HttpClient) {
  }

  public getServiceTypeList(): Observable<ServiceType[]> {
    return this.httpClient.get<ServiceType[]>(this.URL_API);
  }
}
