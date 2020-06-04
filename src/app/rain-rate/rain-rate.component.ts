import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rain-rate',
  templateUrl: './rain-rate.component.html',
  styleUrls: ['./rain-rate.component.css']
})
export class RainRateComponent implements OnInit {

  constructor() { }

  gaugeType = "arch"
  @Input() value: number = 0
  label = "Rain Rate"


  thresholdConfig = {
    '-20': { color: 'blue' },
    '-10': { color: 'lightblue' },
    '0': { color: 'lightgreen' },
    '10': { color: 'green' },
    '20': { color: 'yellow' },
    '30': { color: 'orange' },
    '40': { color: 'red' },
  };
  append = "l/mq";

  ngOnInit() {

  }

}
