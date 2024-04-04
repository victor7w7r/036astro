import axios, { type AxiosInstance } from 'axios'

export type AxiosModule = Readonly<{ client: AxiosInstance }>

export const timeout = 5000

export const axiosModule = (): AxiosModule => {
  const client = axios.create({
    baseURL: 'https://api2.binance.com/api',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  return { client }
}
