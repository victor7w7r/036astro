import {
  component$,
  $,
  useSignal,
  useOnDocument,
  useVisibleTask$
} from '@builder.io/qwik'

import { data } from '@/common/stores/data-store'

export const StorageState = component$(() => {
  const dataSignal = useSignal<string | undefined>()

  useVisibleTask$(() => {
    dataSignal.value = data.get()
  })

  useOnDocument(
    'data',
    $((event: CustomEvent<string>) => {
      dataSignal.value = event.detail
    })
  )

  return (
    <p class='adaptable-center-text text-base font-semibold lg:text-xl'>
      Store State:
      {dataSignal.value != null ? (
        <>
          Yes, you write <b>{dataSignal.value}</b>
        </>
      ) : (
        <>Not yet.</>
      )}
    </p>
  )
})
