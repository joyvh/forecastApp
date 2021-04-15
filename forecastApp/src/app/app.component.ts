import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'forecastApp';
  public weather: Array<any> = []

  constructor(
    private weatherService: WeatherService
   ){
     this.weatherService.getAllWeather().subscribe((resp: any)=>{
       console.log(resp)
       this.weather = resp
    })
  }
}
