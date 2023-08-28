import Cookies from 'js-cookie';
import { $ } from 'carbonium';
import { html } from 'sinuous';

import { data } from '@/common/stores';

const send = () => {
  const value = $<HTMLInputElement>('#inputable').value;
  Cookies.set('data', value);
  data.set(value);
};

document
  .querySelector('#send-button')
  ?.append(html`
    <button class="standard-button" onclick=${send}>Send</button>
  `);
