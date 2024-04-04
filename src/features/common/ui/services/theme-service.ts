import { persistentAtom } from '@nanostores/persistent'

import type { Theme } from '~/theme'

export const themeService = () => {
  const controlTheme = 'bg-slate-700/30'

  const themeStore = persistentAtom<Theme>(
    'theme',
    {
      control: controlTheme,
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    },
    {
      decode: JSON.parse,
      encode: JSON.stringify
    }
  )

  const setDark = (isDark: boolean) =>
    themeStore.set({ ...themeStore.get(), isDark })

  const toggle = () => {
    const current = themeStore.get()

    themeStore.set(
      current.isDark
        ? {
            ...current,
            control: controlTheme,
            dark: 'dark:bg-zinc-900',
            isDark: false,
            togglePeer: 'peer-checked:bg-white'
          }
        : {
            ...current,
            control: controlTheme,
            isDark: true,
            togglePeer: 'peer-checked:bg-dark',
            white: 'bg-white'
          }
    )

    document.documentElement.classList.toggle('dark')
  }

  const changeSelector = (selector: string) => {
    const current = themeStore.get()

    themeStore.set(
      current.isDark
        ? {
            ...current,
            control: `bg-${selector}-700/30`,
            dark: `dark:bg-${selector}-900`,
            togglePeer: `peer-checked:bg-${selector}-500`
          }
        : {
            ...current,
            control: `bg-${selector}-700/30`,
            togglePeer: `peer-checked:bg-${selector}-300`,
            white: `bg-${selector}-300`
          }
    )
  }

  const changeBlue = () => changeSelector('sky')

  const changePurple = () => changeSelector('purple')

  const changeRed = () => changeSelector('red')

  const changeEmerald = () => changeSelector('emerald')

  return {
    changeBlue,
    changeEmerald,
    changePurple,
    changeRed,
    setDark,
    themeStore,
    toggle
  }
}
