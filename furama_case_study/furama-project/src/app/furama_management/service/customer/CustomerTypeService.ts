import {CustomerType} from '../../model/customer/CustomerType';

export class CustomerTypeService {

  public getCustomerTypeList() {
    let customerTypes: CustomerType[];

    customerTypes = [
      {customerTypeId: 1, customerTypeName: 'Diamond'},
      {customerTypeId: 2, customerTypeName: 'Platinum'},
      {customerTypeId: 3, customerTypeName: 'Gold'},
      {customerTypeId: 4, customerTypeName: 'Silver'},
      {customerTypeId: 5, customerTypeName: 'Member'},

    ];
    return customerTypes;
  }
}
