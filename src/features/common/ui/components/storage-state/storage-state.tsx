import { useStore } from '@nanostores/solid'
import { Show } from 'solid-js'

import { inject } from '~/config'

export const StorageState = () => {
  const dataService = inject.resolve('dataService')

  const data = useStore(dataService.dataStore)

  return (
    <p class='adaptable-center-text text-base font-semibold lg:text-xl'>
      Store State:&nbsp;
      <Show
        fallback={
          <>
            Yes, you write <b>{data()}</b>
          </>
        }
        when={data() === undefined}
      >
        <> Not yet.</>
      </Show>
    </p>
  )
}
