import {Component, OnInit} from '@angular/core';
import {Service} from '../../../model/service/Service';
import {ServiceService} from '../../../service/facility/ServiceService';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
  providers: [ServiceService]
})
export class ListServiceComponent implements OnInit {
  serviceList: Service[];


  constructor(private serviceService : ServiceService) {
  }

  ngOnInit(): void {
    this.serviceList = this.serviceService.getServiceList();
  }

}
