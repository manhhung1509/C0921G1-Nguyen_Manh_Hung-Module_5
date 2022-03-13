import {Customer} from '../customer/Customer';
import {Service} from '../service/Service';

export interface Contract {
  id: number;
  contractStartDate: string;
  contractEndDate: string;
  deposit: number;
  customer: Customer;
  service: Service;
}
