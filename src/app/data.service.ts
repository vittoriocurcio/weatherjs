import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class Data {
  temperature: string
  humidity: string
  rainRate: string
}

@Injectable()
export class DataService {
  // configUrl = "./assets/data.json";
  configUrl = "http://www.vittoriocurcio.com/weewx/data.json";


  constructor(private http: HttpClient) {  
  }
 
  temperature = -2;
  getString(): Promise<string> {
    return this.http.get<string>(this.configUrl).toPromise()
  }

  getData(): Promise<Data> {
     return this.http.get<Data>(this.configUrl).toPromise()
  }

}