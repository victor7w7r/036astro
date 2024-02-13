import { component$, Resource, useResource$, Slot } from '@builder.io/qwik'

import { getBitcoin } from '@/home/services'
import type { Binance } from '../models'

export const Call = component$(() => {
  const btcResource = useResource$<Binance>(getBitcoin)

  return (
    <Resource
      value={btcResource}
      onPending={() => <Slot />}
      onResolved={bin => (
        <>
          <p class='adaptable-call'>
            Symbol:
            {bin.symbol}
          </p>
          <p class='adaptable-call'>
            Price:
            {bin.askPrice}
          </p>
        </>
      )}
    />
  )
})
