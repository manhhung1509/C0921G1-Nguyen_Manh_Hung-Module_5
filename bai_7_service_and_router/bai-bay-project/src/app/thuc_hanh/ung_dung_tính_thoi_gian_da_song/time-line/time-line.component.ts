import {Component, OnInit} from '@angular/core';
import {DateUtilService} from '../service/date-util.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit(): void {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
