import type { Binance, UseCase } from '@/home/business/models'
import type { BinanceRepository } from '@/home/business/repositories'

export const getBitcoinUseCase = ({
  binanceRepository
}: Readonly<{
  binanceRepository: BinanceRepository
}>): UseCase<Binance> => ({
  exec: binanceRepository.getBitcoin
})
