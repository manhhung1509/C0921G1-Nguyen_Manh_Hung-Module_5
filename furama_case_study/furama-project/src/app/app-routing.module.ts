import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './furama_management/home/home.component';
import {ListServiceComponent} from './furama_management/component/service/list-service/list-service.component';
import {CreateServiceComponent} from './furama_management/component/service/create-service/create-service.component';
import {UpdateServiceComponent} from './furama_management/component/service/update-service/update-service.component';
import {ListCustomerComponent} from './furama_management/component/customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './furama_management/component/customer/create-customer/create-customer.component';
import {UpdateCustomerComponent} from './furama_management/component/customer/update-customer/update-customer.component';
import {ListContractComponent} from './furama_management/component/contract/list-contract/list-contract.component';
import {CreateContractComponent} from './furama_management/component/contract/create-contract/create-contract.component';
import {NotFoundComponent} from './furama_management/layout/not-found/not-found.component';

const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ListServiceComponent},
  {path: 'create-service', component: CreateServiceComponent},
  {path: 'service/edit/:id', component: UpdateServiceComponent},
  {path: 'customers', component: ListCustomerComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'customer/edit/:id', component: UpdateCustomerComponent},
  {path: 'contracts', component: ListContractComponent},
  {path: 'create-contract', component: CreateContractComponent},
  {path: 'not-found-404', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
