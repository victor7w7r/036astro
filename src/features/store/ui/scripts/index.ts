import Cookies from 'js-cookie'
import { html } from 'sinuous'

import { inject } from '~/di'

// eslint-disable-next-line import/exports-last
export const scriptFunction = () => {
  const { dataStore } = inject.resolve('dataService')

  const send = () => {
    const value =
      document.querySelector<HTMLInputElement>('#inputable')?.value ?? ''
    Cookies.set('data', value)

    dataStore.set(value)
  }

  document
    .querySelector('#send-button')
    ?.append(html`
      <button class="standard-button" onclick=${send}>Send</button>
    `)
}
