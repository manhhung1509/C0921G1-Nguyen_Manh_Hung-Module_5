import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculate',
  templateUrl: './caculate.component.html',
  styleUrls: ['./caculate.component.css']
})
export class CaculateComponent implements OnInit {
  ope = '';
  firstNumber = 0;
  secondNumber = 0;
  result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getCaculate() {
    switch (this.ope) {
      case '+': {
        this.result = this.firstNumber + this.secondNumber;
        break;
      }
      case '-': {
        this.result = this.firstNumber - this.secondNumber;
        break;
      }
      case '*': {
        this.result = this.firstNumber * this.secondNumber;
        break;
      }
      case '/': {
        this.result = this.firstNumber / this.secondNumber;
        break;
      }
    }
  }
}
