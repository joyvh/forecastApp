import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&limit=1&exclude=hourly,minutely&appid=8e606aa4b48eb80d2b6225273279d802';
  
  constructor(private http: HttpClient ) {
    console.log("connected");
  }

   getAllWeather() {
     return this.http.get(this.baseUrl)
     .pipe(
        catchError(this.handleError)
      );
   }

   private handleError(error: HttpErrorResponse) {
    return throwError('Something wrong happened');
  }
}
