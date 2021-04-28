import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCityWeatherComponent } from './find-city-weather.component';

describe('FindCityWeatherComponent', () => {
  let component: FindCityWeatherComponent;
  let fixture: ComponentFixture<FindCityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCityWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
