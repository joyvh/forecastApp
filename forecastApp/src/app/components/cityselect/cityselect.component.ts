import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';
import { City, Weather } from '../../app.component';

export interface Args {
  weather: Weather;
  city: City;
}
@Component({
  selector: 'app-cityselect',
  templateUrl: './cityselect.component.html',
  styleUrls: ['./cityselect.component.sass']
})

export class CityselectComponent {

  @Output() CitySelect: EventEmitter<Args> = new EventEmitter<Args>();

  weather: Weather = new Weather();
  city: City = new City();
  current = 'current';
  daily = 'daily';
  cityName = '';
  lat = 'lat';
  lon = 'lon';
  location = 'name';
  country = 'country';

  constructor(private weatherData: WeatherDataService) { }
  submit(): any {
    this.weatherData.load(this.cityName).subscribe((data: any) => {
      this.city.lat = data[0][this.lat];
      this.city.lon = data[0][this.lon];
      this.city.city = data[0][this.location];
      this.city.country = data[0][this.country];

      this.weatherData.getWeather(this.city.lat, this.city.lon).subscribe((dataW: any) => {
        this.weather.current = dataW[this.current];
        this.weather.daily = dataW[this.daily];
        this.CitySelect.emit({ weather: this.weather, city: this.city });
      });

    });
  }

}
