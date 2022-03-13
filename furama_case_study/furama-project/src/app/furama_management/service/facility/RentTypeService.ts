import {RentType} from '../../model/service/RentType';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RentTypeService {

  URL_API = "http://localhost:3000/rentTypeList"

  constructor(private httpClient: HttpClient) {
  }

  public getRentTypeList(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.URL_API);
  }
}
