import { asFunction } from 'awilix'

import { dataService, themeService } from '@/common/ui/services'
import { getBitcoinUseCase } from '@/home/business/usecases/binance/get-bitcoin'
import { binanceDataSource } from '@/home/data/datasources/binance-datasource'
import { binanceRepository } from '@/home/data/repositories'
import { createTypedContainer } from '~/di/typed-container'
import { axiosModule } from '~/modules'

export const inject = createTypedContainer({
  axiosModule: asFunction(axiosModule).singleton(),
  binanceDataSource: asFunction(binanceDataSource),
  binanceRepository: asFunction(binanceRepository),
  dataService: asFunction(dataService).singleton(),
  getBitcoinUseCase: asFunction(getBitcoinUseCase),
  themeService: asFunction(themeService).singleton()
})
