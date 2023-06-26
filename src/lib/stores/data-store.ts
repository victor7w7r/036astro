import { persistentAtom } from '@nanostores/persistent';

import { dispatchData } from '@/events/data-event';

export const data = persistentAtom<string | undefined>(
  'data', '', {
  encode: JSON.stringify,
  decode: JSON.parse
});

export const setData = (newData: string) =>
  dispatchData(newData, data);