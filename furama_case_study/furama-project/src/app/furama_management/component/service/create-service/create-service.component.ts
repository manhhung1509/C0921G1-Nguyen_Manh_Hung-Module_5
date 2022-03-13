import {Component, OnInit} from '@angular/core';
import {Service} from '../../../model/service/Service';
import {CustomerService} from '../../../service/customer/CustomerService';
import {CustomerTypeService} from '../../../service/customer/CustomerTypeService';
import {Router} from '@angular/router';
import {ServiceService} from '../../../service/facility/ServiceService';
import {ServiceTypeService} from '../../../service/facility/ServiceTypeService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceType} from '../../../model/service/ServiceType';
import {AttachService} from '../../../model/service/AttachService';
import {RentTypeService} from '../../../service/facility/RentTypeService';
import {RentType} from '../../../model/service/RentType';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  submitted = false;
  service: Service;
  serviceTypeList: ServiceType[];
  rentTypeList: RentType[];
  serviceDto: FormGroup  = new FormGroup({
    id: new FormControl('', Validators.required),
    serviceName: new FormControl('', Validators.required),
    serviceArea: new FormControl('', Validators.required),
    maximumPeople: new FormControl('', Validators.required),
    standardRoom: new FormControl('', Validators.required),
    descriptionConvenient: new FormControl('', Validators.required),
    poolArea: new FormControl('', Validators.required),
    numberOfFloor: new FormControl('', Validators.required),
    rentType: new FormControl('', Validators.required),
    serviceType: new FormControl('', Validators.required)
  });

  constructor(private serviceService: ServiceService,
              private serviceTypeService: ServiceTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.serviceTypeService.getServiceTypeList().subscribe(value => {
      this.serviceTypeList = value;
      this.rentTypeService.getRentTypeList().subscribe(value => {
        this.rentTypeList = value;
      });
    });
  }

  public showError() {
    if (this.serviceDto.invalid) {
      this.submitted = true;
    }
  }

   createService() {
    if (this.serviceDto.valid) {
      this.service = this.serviceDto.value;
      this.serviceService.createService(this.service).subscribe(() => {
        this.router.navigateByUrl('services', {state: {message: 'create service successfully!'}});
        console.log(this.service);
      }, error => {
        console.log('error create service.');
      });
    } else {
      this.showError();
    }
  }
}
