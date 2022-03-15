import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './furama_management/home/home.component';
import {FooterComponent} from './furama_management/layout/footer/footer.component';
import {HeaderComponent} from './furama_management/layout/header/header.component';
import {ListCustomerComponent} from './furama_management/component/customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './furama_management/component/customer/create-customer/create-customer.component';
import {UpdateCustomerComponent} from './furama_management/component/customer/update-customer/update-customer.component';
import {ListServiceComponent} from './furama_management/component/service/list-service/list-service.component';
import {CreateServiceComponent} from './furama_management/component/service/create-service/create-service.component';
import {UpdateServiceComponent} from './furama_management/component/service/update-service/update-service.component';
import {ListContractComponent} from './furama_management/component/contract/list-contract/list-contract.component';
import {CreateContractComponent} from './furama_management/component/contract/create-contract/create-contract.component';
import {NotFoundComponent} from './furama_management/layout/not-found/not-found.component';
import {CustomerService} from './furama_management/service/customer/CustomerService';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CustomerTypeService} from './furama_management/service/customer/CustomerTypeService';
import {ServiceService} from './furama_management/service/facility/ServiceService';
import {ServiceTypeService} from './furama_management/service/facility/ServiceTypeService';
import {RentTypeService} from './furama_management/service/facility/RentTypeService';
import {ValidateCustomerService} from './furama_management/service/validate/validate_customer/validate-customer.service';
import {ValidateServiceService} from './furama_management/service/validate/validate_service/validate-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListServiceComponent,
    CreateServiceComponent,
    UpdateServiceComponent,
    ListContractComponent,
    CreateContractComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    CustomerTypeService,
    ServiceService,
    ServiceTypeService,
    RentTypeService,
    ValidateCustomerService,
    ValidateServiceService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
