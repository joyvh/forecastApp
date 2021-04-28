import { Component } from '@angular/core';

export class Weather {
  current!: Current;
  daily!: Daily;
}

export class Current {
  temp!: number;
  sensation!: number;
  humidity!: number;
  cloudiness!: number;
  uv!: number;
  weatherDescription!: Description;
}

export class Description {
  id!: number;
  main!: string;
  desc!: string;
  icon!: string;
}

export class Daily {
  temp!: Temp;
  humidity!: number;
  weatherDescription!: Description;
  cloudiness!: number;
  uv!: number;
}

export class Temp {
  day!: number;
  min!: number;
  max!: number;
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
