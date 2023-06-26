import { axiosClient, timeout } from '@/config';

import { errorBinance, type Binance } from '@/models';

export const getBitcoin = async(
): Promise<Binance> => {
  try {
    const res = await axiosClient.get<Binance[]>(
      '/v3/ticker/24hr',
      { timeout }
    );
    return res
      .data
      .find( curr => curr.symbol === 'BTCUSDT')
    ?? errorBinance;
  } catch (e) {
    return errorBinance;
  }
};