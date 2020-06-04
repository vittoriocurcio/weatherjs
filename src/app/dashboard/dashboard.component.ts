import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  temperature = 0
  humidity = 50
  rainRate = 0
  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.getData().then(
        (data) => {
          this.temperature = parseFloat(data.temperature.match("[0-9]+\.[0-9]+")[0]);
          this.humidity = parseFloat(data.humidity.match("[0-9]+")[0]);
          this.rainRate = this.extractRainRate(data.rainRate);
        }
      )
  }

  extractRainRate(rainRate: string):number {
    if (rainRate.trim() === "N/A")
      return 0
    else
      return parseFloat(rainRate.trim().match("[0-9]+\.[0-9]+")[0])
  }

}
