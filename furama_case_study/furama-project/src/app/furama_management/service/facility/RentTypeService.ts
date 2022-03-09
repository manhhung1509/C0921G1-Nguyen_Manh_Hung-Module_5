import {RentType} from '../../model/service/RentType';

export class RentTypeService {

  public getRentTypeList() {

    let rentTypeList: RentType[];

    rentTypeList = [
      {rentTypeId: 1, rentTypeCost: 300000, rentTypeName: 'Hour'},
      {rentTypeId: 2, rentTypeCost: 400000, rentTypeName: 'Month'},
      {rentTypeId: 3, rentTypeCost: 500000, rentTypeName: 'Day'},
      {rentTypeId: 4, rentTypeCost: 600000, rentTypeName: 'Hour'},
    ];

    return rentTypeList;
  }
}
