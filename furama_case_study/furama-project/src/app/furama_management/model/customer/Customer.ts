import {CustomerType} from './CustomerType';

export interface Customer {
  id: number;
  customerName: string;
  customerBirthday: string;
  customerGender: string;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerType: CustomerType;
  address: string;

}
