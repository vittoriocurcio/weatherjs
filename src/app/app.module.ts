import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GaugeModule } from 'angular-gauge';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxGaugeModule } from 'ngx-gauge';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HumidityComponent } from './humidity/humidity.component';
import { RainRateComponent } from './rain-rate/rain-rate.component';
import { WindComponent } from './wind/wind.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService} from './core/services/theme.service';
import { FooterComponent } from './footer/footer.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent, TemperatureComponent, DashboardComponent, HumidityComponent, RainRateComponent, WindComponent, SlideToggleComponent, FooterComponent, HomeComponent
  ],
  imports: [
    BrowserModule, GaugeModule.forRoot(), HttpClientModule, NgxGaugeModule,
    FormsModule, BrowserAnimationsModule, MatSlideToggleModule, MatTabsModule, MatToolbarModule, MatBottomSheetModule, AppRoutingModule
  ],
  providers: [DataService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
