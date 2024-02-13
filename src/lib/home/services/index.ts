import { pipe } from 'fp-ts/lib/function'
import { of } from 'fp-ts/lib/Task'
import { getOrElse, map, tryCatch } from 'fp-ts/lib/TaskEither'

import { axiosClient, timeout } from '@core/modules'

import { errorBinance, type Binance } from '@/home/models'

export const getBitcoin = () =>
  pipe(
    tryCatch(
      () =>
        axiosClient.get<Binance[]>('/v3/ticker/24hr', {
          timeout
        }),
      e => e
    ),
    map(
      res => res.data.find(curr => curr.symbol === 'BTCUSDT') ?? errorBinance
    ),
    getOrElse(() => of(errorBinance))
  )()
