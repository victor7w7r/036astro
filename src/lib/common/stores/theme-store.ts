import { persistentAtom } from '@nanostores/persistent';

import type { Theme } from '@/common/models';

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
);

export const setDark = (isDark: boolean): void =>
  theme.set({ ...theme.get(), isDark });

export const toggle = (): void => {
  const current = theme.get();

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
  );

  document.documentElement.classList.toggle('dark');
};

export const changeSelector = (selector: string): void => {
  const current = theme.get();

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
  );
};

export const changeBlue = (): void => changeSelector('sky');

export const changePurple = (): void => changeSelector('purple');

export const changeRed = (): void => changeSelector('red');

export const changeEmerald = (): void => changeSelector('emerald');
