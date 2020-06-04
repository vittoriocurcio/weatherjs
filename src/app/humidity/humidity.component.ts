import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {

  constructor() { }
  
  gaugeType = "arch"
  @Input() value: number = 0
  append = "%"
  label = "Humidity"

  thresholdConfig = {
    '-20': { color: 'blue' },
    '-10': { color: 'lightblue' },
    '0': { color: 'lightgreen' },
    '10': { color: 'green' },
    '20': { color: 'yellow' },
    '30': { color: 'orange' },
    '40': { color: 'red' },
  };

  ngOnInit(): void {
  }

}
