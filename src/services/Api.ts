import axios from 'axios';

export const WeatherApi = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: '374e1857aeb84d759ba175904242101',
  },
});
