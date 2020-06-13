import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {

  constructor() { }

  gaugeType = 'arch';
  @Input() value = 0;
  append = '%';
  label = 'Humidity';

  thresholdConfig = {
    0: {color: 'red'},
    15: {color: 'orange'},
    35: {color: 'green'},
    65: {color: 'orange'},
    85: {color: 'red'}
  };

  ngOnInit(): void {
  }

}
