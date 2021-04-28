import { Component } from '@angular/core';
import { Weather, City } from '../../app.component';
import { Args } from '../cityselect/cityselect.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})

export class DisplayComponent {
  weather: Weather = {
    current: {
      temp: 0,
      sensation: 0,
      humidity: 0,
      cloudiness: 0,
      uv: 0,
      weatherDescription: {
        id: 0,
        main: '',
        desc: '',
        icon: ''
      }
    },
    daily: {
      temp: {
        day: 0,
        min: 0,
        max: 0,
      },
      humidity: 0,
      weatherDescription: {
        id: 0,
        main: '',
        desc: '',
        icon: ''
      },
      cloudiness: 0,
      uv: 0
    }
  };

  city: City = {
    city: 'No city',
    country: 'No Country',
    lat: 0,
    lon: 0
  };

  args: Args = {
    weather: {
      current: {
        temp: 0,
        sensation: 0,
        humidity: 0,
        cloudiness: 0,
        uv: 0,
        weatherDescription: {
          id: 0,
          main: '',
          desc: '',
          icon: ''
        }
      },
      daily: {
        temp: {
          day: 0,
          min: 0,
          max: 0,
        },
        humidity: 0,
        weatherDescription: {
          id: 0,
          main: '',
          desc: '',
          icon: ''
        },
        cloudiness: 0,
        uv: 0
      }
    },
    city: {
      city: 'No city',
      country: 'No Country',
      lat: 0,
      lon: 0
    }
  };
  update(args: Args): void {
    this.weather = args.weather;
    this.city = args.city;
  }
}
