import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';
import { City, Weather } from '../../app.component';

@Component({
  selector: 'app-cityselect',
  templateUrl: './cityselect.component.html',
  styleUrls: ['./cityselect.component.sass']
})
export class CityselectComponent {

  @Output() CitySelect: EventEmitter<Weather> = new EventEmitter<Weather>();
  weather: Weather = new Weather();
  city: City = new City();
  location = 'city';
  cityName = '';
  lat = 'lat';
  lon = 'lon';
  constructor(private weatherData: WeatherDataService) { }
  submit(): any {
    this.weatherData.load(this.cityName).subscribe((data: any) => {
      this.city.lat = data[0][this.lat];
      this.city.lon = data[0][this.lon];

      this.weatherData.getWeather(this.city.lat, this.city.lon).subscribe((dataW: any) => {
        this.weather.city = dataW[this.location];
        /*this.weather.conditions = data[this.dataWeather][0][this.main];
        this.weather.temperature = Math.round(data[this.main][this.temp]);
        this.weather.icon = this.weatherData.getIconUrl(data[this.dataWeather][0][this.icon]);*/
        this.CitySelect.emit(this.weather);
      });

    });
  }

}
