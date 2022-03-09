import {Component, OnInit} from '@angular/core';
import {Contract} from '../../../model/contract/Contract';
import {ContractService} from '../../../service/contract/ContractService';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css'],
  providers: [ContractService]
})
export class ListContractComponent implements OnInit {
  contractList: Contract[];

  constructor(private contractService: ContractService) {

  }

  ngOnInit(): void {
    this.contractList = this.contractService.getContractList();
  }

}
