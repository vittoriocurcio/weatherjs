import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class OldData {
  temperature: string;
  humidity: string;
  rainRate: string;
}

export class Location {

}
export class Metrics {
  temperature: string;
  humidity: string;
  rainRate: string;
  windSpeed: string;
  windDirection: string;
}

export class Data {
  location: Location;
  metrics: Metrics;
}

@Injectable()
export class DataService {
  configUrl = "http://www.vittoriocurcio.com/weewx/current.json";
  //configUrl = '/assets/data.json';

  constructor(private http: HttpClient) {
  }

  temperature = -2;
  getString(): Promise<string> {
    return this.http.get<string>(this.configUrl).toPromise();
  }

  getData(): Promise<Data[]> {
     return this.http.get<Data[]>(this.configUrl).toPromise();
  }

}
