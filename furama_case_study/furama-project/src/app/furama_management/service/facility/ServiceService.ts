import {Service} from '../../model/service/Service';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceService {
  public getServiceList() {

    let serviceList: Service[];

    serviceList = [
      {
        id: 1, serviceName: 'Villa 1', serviceArea: 100, maximumPeople: 3, standardRoom: 'premium',
        descriptionConvenient: 'Have pool', poolArea: 50, numberOfFloor: 2,
        rentType: {rentTypeId: 1, rentTypeName: 'Year', rentTypeCost: 200},
        serviceType: {serviceTypeId: 1, serviceTypeName: 'Villa'}
      },
      {
        id: 2, serviceName: 'House1', serviceArea: 90, maximumPeople: 3, standardRoom: 'Normal',
        descriptionConvenient: 'Have microwave', numberOfFloor: 3,
        rentType: {rentTypeId: 2, rentTypeName: 'Month', rentTypeCost: 250},
        serviceType: {serviceTypeId: 1, serviceTypeName: 'House'}
      },
      {
        id: 3, serviceName: 'Room1', serviceArea: 150, maximumPeople: 2, standardRoom: 'premium',
        descriptionConvenient: 'Free bike', poolArea: 70, numberOfFloor: 2,
        rentType: {rentTypeId: 3, rentTypeName: 'Day', rentTypeCost: 300},
        serviceType: {serviceTypeId: 3, serviceTypeName: 'Room'}
      }
    ];
    return serviceList;
  }
}
