import {ServiceType} from '../../model/service/ServiceType';

export class ServiceTypeService {

  public getServiceType() {
    let serviceTypeList: ServiceType[];

    serviceTypeList = [
      {serviceTypeId: 1, serviceTypeName: 'Villa'},
      {serviceTypeId: 2, serviceTypeName: 'House'},
      {serviceTypeId: 3, serviceTypeName: 'Room'}
    ];
    return serviceTypeList;
  }
}
