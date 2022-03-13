import {Component, OnInit} from '@angular/core';
import {Service} from '../../../model/service/Service';
import {ServiceService} from '../../../service/facility/ServiceService';
import {CustomerService} from '../../../service/customer/CustomerService';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../model/customer/Customer';
import {CustomerType} from '../../../model/customer/CustomerType';
import {AttachService} from '../../../model/service/AttachService';
import {RentType} from '../../../model/service/RentType';
import {ServiceType} from '../../../model/service/ServiceType';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
  providers: [ServiceService]
})
export class ListServiceComponent implements OnInit {
  serviceList: Service[];
  p =1;
  service: Service;
  message: string;


  constructor(private serviceService : ServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.service = new class implements Service {
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
    };
    this.message = Object(this.router.getCurrentNavigation().extras.state).message;
  }

  ngOnInit(): void {
    this.serviceService.getServiceList().subscribe(value => {
        this.serviceList = value;
      },
      error => {
        console.log('error get list customer.');
      });
  }

  shoModal(id: number) {
    this.serviceService.findCustomerById(id).subscribe(value => {
      this.service = value;
    });
  }

  deleteService(id: number):void {
    this.serviceService.deleteService(id).subscribe(value => {
        console.log("delete service successfully!")
      },error => {},
      () => {
        this.ngOnInit();
      });
  }
}
