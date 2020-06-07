import { Component, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { DataService, Data } from '../data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: Data[]
  darkMode: boolean = true

  private renderer: Renderer2

  constructor(private dataService: DataService, private factory: RendererFactory2) {
    this.renderer = factory.createRenderer(null, null)
  }
  
  ngOnInit(): void {
    this.dataService.getData().then(
      (data) => {
        this.data = data
        data.forEach(d => {
          this.normalizeMetrics(d)
        });
      }
    )

    if (this.isDarkModeEnabled()) {
      this.enableDarkMode()
    }
    else {
      this.disableDarkMode()
    }
  }

  private isDarkModeEnabled(): boolean {
    if (localStorage.getItem('dark-mode') == "true")
      return true
    return false
  }

  onToggle(on: boolean) {
    if (on) {
      this.disableDarkMode()
    }
    else {
      this.enableDarkMode()
    }
  }

  private enableDarkMode(){
    this.darkMode = true
    this.renderer.addClass(document.body, "dark-mode")
    localStorage.setItem('dark-mode', "true")
  }

  private disableDarkMode(){
    this.darkMode = false
    this.renderer.removeClass(document.body, "dark-mode")
    localStorage.setItem('dark-mode', "false")
  }

  private normalizeMetrics(d: Data) {
    d.metrics.temperature = d.metrics.temperature.match("[0-9]+\.[0-9]+")[0];
    d.metrics.humidity = d.metrics.humidity.match("[0-9]+")[0]
    d.metrics.rainRate = this.extractRainRate(d.metrics.rainRate)
    d.metrics.windSpeed = d.metrics.windSpeed?.match("[0-9]+\.[0-9]+")[0]
  }

  private extractRainRate(rainRate: string): string {
    if (rainRate) {
      if (rainRate.trim() === "N/A")
        return "0"
      else
        return rainRate.trim().match("[0-9]+\.[0-9]+")[0]
    }
  }
}
