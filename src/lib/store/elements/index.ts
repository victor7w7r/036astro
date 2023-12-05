import Cookies from 'js-cookie';
import { html } from 'sinuous';

import { data } from '@/common/stores';

const send = () => {
  const value =
    document.querySelector<HTMLInputElement>('#card-inputable')?.value ?? '';
  Cookies.set('data', value);
  data.set(value);
};

document
  .querySelector('#send-button')
  ?.append(html`
    <button class="standard-button" onclick=${send}>Send</button>
  `);
