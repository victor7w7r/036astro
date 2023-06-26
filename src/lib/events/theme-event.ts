import type { WritableAtom } from 'nanostores';

import type { Theme } from '@/models/theme';

class ThemeEvent extends Event {

  readonly detail: Theme;

  constructor(theme: Theme) {
    super('theme-event');
    this.detail = theme;
  }

}

export const dispatchTheme = (
  newTheme: Theme,
  store: WritableAtom<Theme>
): void => {
  document.dispatchEvent(
    new ThemeEvent(newTheme)
  );
  store.set(newTheme);
};

export const listenTheme = (
  call: (theme: Theme) => void
): void => document.addEventListener(
  'theme-event',
  ((e: ThemeEvent) => call(e.detail)) as EventListener
);