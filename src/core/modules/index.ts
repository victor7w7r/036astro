import axios from 'axios';

import { environment } from '@core/env';

export const timeout = 5000;

export const axiosClient = axios.create({
  baseURL: environment.PUBLIC_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
