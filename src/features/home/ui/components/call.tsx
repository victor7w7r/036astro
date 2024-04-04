import { type Component, createResource, type JSX, Show } from 'solid-js'

import { inject } from '~/config'

export const Call: Component<Readonly<{ children?: JSX.Element }>> = props => {
  const getBitcoinUseCase = inject.resolve('getBitcoinUseCase')

  const [bit] = createResource('', getBitcoinUseCase.exec)

  return (
    <Show fallback={props.children} when={bit.loading}>
      <>
        <p class='adaptable-call'>
          Symbol:
          {bit()?.symbol ?? 'loading'}
        </p>
        <p class='adaptable-call'>
          Price:
          {bit()?.askPrice ?? 'loading'}
        </p>
      </>
    </Show>
  )
}
