import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { WeatherDataService } from './services/weather-data.service';
import { CityselectComponent } from './components/cityselect/cityselect.component';
import { FormsModule } from '@angular/forms';
import { FindCityWeatherComponent } from './components/find-city-weather/find-city-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CityselectComponent,
    FindCityWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
