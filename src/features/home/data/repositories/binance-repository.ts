import { pipe } from 'fp-ts/lib/function'
import { of } from 'fp-ts/lib/Task'
import { getOrElse, map, tryCatch } from 'fp-ts/lib/TaskEither'

import { errorBinance } from '@/home/business/models'
import type { BinanceRepository } from '@/home/business/repositories'
import type { BinanceDataSource } from '@/home/data/datasources'

export const binanceRepository = ({
  binanceDataSource
}: Readonly<{
  binanceDataSource: BinanceDataSource
}>): BinanceRepository => {
  const getBitcoin = async () =>
    pipe(
      tryCatch(binanceDataSource.getBitcoin, e => e),
      map(
        res =>
          res.data.find(curr => curr.symbol === 'BTCUSDT') ?? errorBinance()
      ),
      getOrElse(() => of(errorBinance()))
    )()

  return { getBitcoin }
}
