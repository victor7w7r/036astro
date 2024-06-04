import { html } from 'sinuous'
import { define } from 'uce'

import { inject } from '~/di'

const path = (isDark: boolean, white: string, black: string) =>
  `/img/${isDark ? white : black}.png`

// eslint-disable-next-line import/exports-last
export const scriptFunction = () => {
  const { changeBlue, changeEmerald, changePurple, changeRed, themeStore } =
    inject.resolve('themeService')

  define<
    {
      black: string
      classstyle: string
      white: string
    },
    { isDark: boolean }
  >('img-reactive', {
    init() {
      themeStore.subscribe(() => this.render())
    },
    render() {
      this.isDark = themeStore.get().isDark
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.html`<img
        alt=''
        class='${this.props.classstyle}'
        src='${path(this.isDark, this.props.white, this.props.black)}'
      />`
    }
  })

  document.querySelector('#buttons-selector')?.append(html`
    <button class="blue-button" onclick=${changeBlue}></button>
    <button class="purple-button" onclick=${changePurple}></button>
    <button class="red-button" onclick=${changeRed}></button>
    <button class="emerald-button" onclick=${changeEmerald}></button>
  `)
}
