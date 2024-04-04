import type { Binance } from '@/home/business/models'

export type BinanceRepository = Readonly<{
  getBitcoin: () => Promise<Binance>
}>
