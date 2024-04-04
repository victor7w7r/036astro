import './toggler.css'

import { useStore } from '@nanostores/solid'
import { createSignal, onMount } from 'solid-js'

import { inject } from '~/config'

export const Toggler = () => {
  const { themeStore, toggle } = inject.resolve('themeService')

  const theme = useStore(themeStore)

  const [dark, setDark] = createSignal(false)

  onMount(() => setDark(theme().isDark))

  return (
    <div class='relative'>
      <label
        class='mb-4 inline-flex cursor-pointer items-center'
        for='checked-toggle'
      >
        <input
          checked={dark()}
          class='peer sr-only'
          id='checked-toggle'
          onChange={_ => toggle()}
          type='checkbox'
          value=''
        />
        <div class={`${theme().togglePeer} toggle-design peer`} />
        <span class='adaptable-text ml-3 select-none text-sm font-medium'>
          Dark Mode
        </span>
      </label>
    </div>
  )
}
