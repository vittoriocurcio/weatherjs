import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent implements OnInit {

  constructor() { }

  gaugeType = "arch"
  label = "Wind"
  max = 10
  @Input() value: number
  @Input() direction: string

  thresholdConfig = {
    '-20': { color: 'blue' },
    '-10': { color: 'lightblue' },
    '0': { color: 'lightgreen' },
    '10': { color: 'green' },
    '20': { color: 'yellow' },
    '30': { color: 'orange' },
    '40': { color: 'red' },
  };
  append = "m/s";

  ngOnInit() {
    if (this.value > 10) {
      this.max = 30
    }
    this.direction = this.calculate_direction(this.direction)
  }

  calculate_direction(direction: string): string {
    var dir = Math.floor(parseFloat(direction + 22.5) / 45)
    switch (dir) {
      case 1:
        return "NE";
      case 2:
        return "E"
      case 3:
        return "SE"
      case 4:
        return "S"
      case 5:
        return "SW"
      case 6:
        return "W"
      case 7:
        return "NW"
      default:
        return "N"
    }
  }
}
