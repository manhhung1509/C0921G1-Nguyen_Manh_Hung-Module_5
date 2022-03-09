import {RentType} from './RentType';
import {AttachService} from './AttachService';
import {ServiceType} from './ServiceType';

export interface Service {
  id:number;
  serviceName: string;
  serviceArea: number;
  maximumPeople: number;
  standardRoom?: string;
  descriptionConvenient?:string;
  poolArea?:number;
  numberOfFloor?:number;
  attachService?:AttachService;
  rentType: RentType;
  serviceType: ServiceType;

}
