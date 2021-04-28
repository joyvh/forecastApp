import { Component } from '@angular/core';

export class Weather {
  city!: string;
  conditions!: string;
  temperature!: number;
  icon!: string;
}

export class City {
  city!: string;
  lat!: number;
  lon!: number;
  country!: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Weather';
  public weather: Array<any> = [];
  public city: Array<any> = [];

  constructor() { }
}
