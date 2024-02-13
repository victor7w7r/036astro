import {
  component$,
  $,
  useSignal,
  useOnDocument,
  useVisibleTask$,
  useStyles$
} from '@builder.io/qwik'

import { theme, toggle } from '@/common/stores'

import style from './toggler.css?inline'

export const Toggler = component$(() => {
  useStyles$(style)

  const isDark = useSignal(false)
  const togglePeer = useSignal('')

  useVisibleTask$(() => {
    isDark.value = theme.get().isDark
    togglePeer.value = theme.get().togglePeer
  })

  useOnDocument(
    'isDarkToggle',
    $((event: CustomEvent<boolean>) => {
      isDark.value = event.detail
    })
  )

  useOnDocument(
    'togglePeer',
    $((event: CustomEvent<string>) => {
      togglePeer.value = event.detail
    })
  )

  return (
    <div class='relative'>
      <div class='flex w-full items-center justify-center'>
        <label
          for='checked-toggle'
          class='mb-4 inline-flex cursor-pointer items-center'
        >
          <input
            type='checkbox'
            value=''
            id='checked-toggle'
            class='peer sr-only'
            checked={isDark.value}
            onChange$={$(toggle)}
          />
          <div class={`${togglePeer.value} toggle-design peer`}></div>
          <span class='adaptable-text ml-3 select-none text-sm font-medium'>
            Dark Mode
          </span>
        </label>
      </div>
    </div>
  )
})
