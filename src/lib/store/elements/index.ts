import Cookies from 'js-cookie';
import { html, render } from 'uhtml';

import { data } from '@/common/stores';

const send = () => {
  const value = document
    .querySelector<HTMLInputElement>('.inputable')?.value;
  Cookies.set('data', value ?? '');
  data.set(value);
};

render(
  document.querySelector<HTMLDivElement>('#send-button') ??
    document.body,
  html`
    <button class='standard-button' @click=${send}>
      Send
    </button>
  `
);