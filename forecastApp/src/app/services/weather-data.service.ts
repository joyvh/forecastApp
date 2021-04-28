import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const serviceUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const cityServiceUrl = 'http://api.openweathermap.org/geo/1.0/direct';
const apiKey = '8e606aa4b48eb80d2b6225273279d802';

@Injectable({
  providedIn: 'root'
})

export class WeatherDataService {
  constructor(private http: HttpClient) { }
  load(city: string): any {
    return this.http.get(cityServiceUrl + '?q=' + city + '&appid=' + apiKey + '&limit=1');
  }
  getWeather(lat: number, lon: number): any {
    return this.http.get(serviceUrl + '?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&exclude=hourly,minutely&units=imperial');
  }
  getIconUrl(icon: string): string {
    return 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
  }
}
