import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],

})

export class TemperatureComponent implements OnInit {

  constructor() {}

  gaugeType = "arch"
  label = "Temperature"
  @Input() value: number
  
  thresholdConfig = {
    '-20': { color: 'blue' },
    '-10': { color: 'lightblue' },
    '0': { color: 'lightgreen' },
    '10': { color: 'green' },
    '20': { color: 'yellow' },
    '30': { color: 'orange' },
    '40': { color: 'red' },
  };
  append="°";

  ngOnInit() {
   
  }

}