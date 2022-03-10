import {Contract} from '../../model/contract/Contract';
import {Injectable} from '@angular/core';

@Injectable()
export class ContractService {

  public getContractList() {
    let contractList: Contract[];

    contractList = [
      {
        contractCode: 'CT-0001',
        contractStartDate: '2020-10-12',
        contractEndDate: '2020-10-15',
        deposit: 1000,
        customer: {
          id: 1, customerName: 'Nguyễn Văn Nghĩa', customerBirthday: '2000-12-09', customerGender: '1',
          customerIdCard: '090879687965', customerPhone: '0910980982', customerEmail: 'nghia123@gmail.com',
          customerType: {customerTypeId: 1, customerTypeName: 'Diamond'}, address: 'Thanh Hóa'
        },
        service: {
          id: 1,
          serviceName: 'Villa 1',
          serviceArea: 100,
          maximumPeople: 3,
          standardRoom: 'premium',
          descriptionConvenient: 'Have pool',
          poolArea: 50,
          numberOfFloor: 2,
          rentType: {rentTypeId: 1, rentTypeName: 'Year', rentTypeCost: 200},
          serviceType: {serviceTypeId: 1, serviceTypeName: 'Villa'}
        }
      }
    ];
    return contractList;
  }
}
