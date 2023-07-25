import { axiosClient, timeout } from '@/common/config';

import { errorBinance, type Binance } from '@/home/models';

export const getBitcoin = async (): Promise<Binance> => {
  try {
    const res = await axiosClient.get<Binance[]>('/v3/ticker/24hr', {
      timeout
    });
    return res.data.find(curr => curr.symbol === 'BTCUSDT') ?? errorBinance;
  } catch (e) {
    return errorBinance;
  }
};
