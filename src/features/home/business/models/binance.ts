export type Binance = Readonly<{
  askPrice: string
  askQty: string
  bidPrice: string
  bidQty: string
  closeTime: number
  count: number
  firstId: number
  highPrice: string
  lastId: number
  lastPrice: string
  lastQty: string
  lowPrice: string
  openPrice: string
  openTime: number
  prevClosePrice: string
  priceChange: string
  priceChangePercent: string
  quoteVolume: string
  symbol: string
  volume: string
  weightedAvgPrice: string
}>

export const errorBinance = (): Binance => ({
  askPrice: '',
  askQty: '',
  bidPrice: '',
  bidQty: '',
  closeTime: 0,
  count: 0,
  firstId: 0,
  highPrice: '',
  lastId: 0,
  lastPrice: '',
  lastQty: '',
  lowPrice: '',
  openPrice: '',
  openTime: 0,
  prevClosePrice: '',
  priceChange: '',
  priceChangePercent: '',
  quoteVolume: '',
  symbol: 'ERR',
  volume: '',
  weightedAvgPrice: ''
})
