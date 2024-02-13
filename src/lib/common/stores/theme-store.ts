import { persistentAtom } from '@nanostores/persistent'

import type { Theme } from '@/common/models'

export const theme = persistentAtom<Theme>(
  'theme',
  {
    isDark: false,
    white: 'bg-white',
    dark: 'dark:bg-zinc-900',
    control: 'bg-slate-700/30',
    togglePeer: ''
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
)

export const setDark = (isDark: boolean) =>
  theme.set({ ...theme.get(), isDark })

export const toggle = () => {
  const current = theme.get()

  theme.set(
    current.isDark
      ? {
          ...current,
          isDark: false,
          dark: 'dark:bg-zinc-900',
          control: 'bg-slate-700/30',
          togglePeer: 'peer-checked:bg-white'
        }
      : {
          ...current,
          isDark: true,
          white: 'bg-white',
          control: 'bg-slate-700/30',
          togglePeer: 'peer-checked:bg-dark'
        }
  )

  document.dispatchEvent(
    new CustomEvent('isDarkToggle', { detail: theme.get().isDark })
  )

  document.dispatchEvent(
    new CustomEvent('togglePeer', { detail: theme.get().togglePeer })
  )

  document.documentElement.classList.toggle('dark')
}

export const changeSelector = (selector: string) => {
  const current = theme.get()

  theme.set(
    current.isDark
      ? {
          ...current,
          dark: `dark:bg-${selector}-900`,
          control: `bg-${selector}-700/30`,
          togglePeer: `peer-checked:bg-${selector}-500`
        }
      : {
          ...current,
          white: `bg-${selector}-300`,
          control: `bg-${selector}-700/30`,
          togglePeer: `peer-checked:bg-${selector}-300`
        }
  )
}

export const changeBlue = () => changeSelector('sky')

export const changePurple = () => changeSelector('purple')

export const changeRed = () => changeSelector('red')

export const changeEmerald = () => changeSelector('emerald')
