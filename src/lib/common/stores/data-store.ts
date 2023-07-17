import { persistentAtom } from '@nanostores/persistent';

export const data = persistentAtom<string | undefined>(
  'data', '', {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);