import axios from 'axios';

// API Key to openweathermap.org a1adee2aa87c4f7bed788d68cd283737
const API_KEY = 'a1adee2aa87c4f7bed788d68cd283737';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
