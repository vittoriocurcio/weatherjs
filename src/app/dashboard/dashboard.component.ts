import { Component, OnInit } from '@angular/core';
import { DataService, Data } from '../data.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: Data[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().then(
      (data) => {
        this.data = data
        data.forEach(d => {
          d.metrics.temperature = d.metrics.temperature.match("[0-9]+\.[0-9]+")[0];
          d.metrics.humidity = d.metrics.humidity.match("[0-9]+")[0]
          d.metrics.rainRate = this.extractRainRate(d.metrics.rainRate)
          d.metrics.windSpeed = d.metrics.windSpeed.match("[0-9]+\.[0-9]+")[0]
        });
      }
    )
  }

  extractRainRate(rainRate: string): string {
    if (rainRate) {
      if (rainRate.trim() === "N/A")
        return "0"
      else
        return rainRate.trim().match("[0-9]+\.[0-9]+")[0]
    }
  }

}
