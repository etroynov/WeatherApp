import {WeatherApi} from './Api';

type Condition = {
  text: string;
  icon: string;
  code: number;
};

type Location = {
  name: string;
  region: string;
  country: string;
  tz_id: string;
  localtime: string;
};

type Forecast = {
  forecastday: ForecastDay[];
};

export type ForecastHour = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
};

export type ForecastDay = {
  date: string;
  day: object;
  astro: object;
  hour: ForecastHour[];
};

export type Weather = {
  location: Location;
  current: {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
  };
  forecast: Forecast;
};

export class WeatherService {
  static async getForcastByLocation(query: string, days = 1) {
    const res = await WeatherApi.get<Weather>(
      `/forecast.json?q=${query}&days=${days}&aqi=no&alerts=no`,
    );
    return res.data;
  }
}
