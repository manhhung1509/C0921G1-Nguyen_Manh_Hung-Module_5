import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './furama_management/home/home.component';
import { FooterComponent } from './furama_management/layout/footer/footer.component';
import { HeaderComponent } from './furama_management/layout/header/header.component';
import { ListCustomerComponent } from './furama_management/component/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './furama_management/component/customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './furama_management/component/customer/update-customer/update-customer.component';
import { ListServiceComponent } from './furama_management/component/service/list-service/list-service.component';
import { CreateServiceComponent } from './furama_management/component/service/create-service/create-service.component';
import { UpdateServiceComponent } from './furama_management/component/service/update-service/update-service.component';
import { ListContractComponent } from './furama_management/component/contract/list-contract/list-contract.component';
import { CreateContractComponent } from './furama_management/component/contract/create-contract/create-contract.component';
import { NotFoundComponent } from './furama_management/layout/not-found/not-found.component';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
