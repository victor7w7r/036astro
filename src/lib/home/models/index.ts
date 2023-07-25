export type Binance = {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
};

export const errorBinance: Binance = {
  symbol: 'ERR',
  priceChange: '',
  priceChangePercent: '',
  weightedAvgPrice: '',
  prevClosePrice: '',
  lastPrice: '',
  lastQty: '',
  bidPrice: '',
  bidQty: '',
  askPrice: '',
  askQty: '',
  openPrice: '',
  highPrice: '',
  lowPrice: '',
  volume: '',
  quoteVolume: '',
  openTime: 0,
  closeTime: 0,
  firstId: 0,
  lastId: 0,
  count: 0
};
