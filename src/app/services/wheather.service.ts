import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/wheather.model'
@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor(private http: HttpClient) { }

  getwheatherData(cityName:string): Observable<weatherData>{
     return this.http.get<weatherData>(environment.Wheatherapibaseurl, {
        headers: new HttpHeaders() 
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue).set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
        params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
      })
  }
}
