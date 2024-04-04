import { persistentAtom } from '@nanostores/persistent'

export const dataService = () => {
  const dataStore = persistentAtom<string | undefined>('data', '', {
    decode: JSON.parse,
    encode: JSON.stringify
  })

  return { dataStore }
}
