import Cookies from 'js-cookie';

import { listenTheme } from '@/events';
import { setData, theme } from '@/stores';
import { buttonCallback, inputValue } from '@/utils';

const { control } = theme.get();

document.querySelectorAll<HTMLDivElement>('.card-container')
  .forEach((container) => {
    container.classList.add(control);
    listenTheme((theme) => {
      const classes = container.classList;
      classes.remove(classes[classes.length - 1]!);
      classes.add(theme.control);
    });
  });

buttonCallback(
  'standard-button',
  () => {
    const value = inputValue('inputable');
    Cookies.set(
      'data',
      value,
      { httpOnly: true }
    );
    setData(value);
  }
);