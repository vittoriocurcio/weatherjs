import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GaugeModule } from 'angular-gauge';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DataService } from "./data.service"
import { HttpClientModule } from '@angular/common/http';
import { NgxGaugeModule } from 'ngx-gauge';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HumidityComponent } from './humidity/humidity.component';
import { RainRateComponent } from './rain-rate/rain-rate.component';

@NgModule({
  declarations: [
    AppComponent, TemperatureComponent, DashboardComponent, HumidityComponent, RainRateComponent
  ],
  imports: [
    BrowserModule, GaugeModule.forRoot(), HttpClientModule, NgxGaugeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
