/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { inject } from '~/di'

// eslint-disable-next-line import/exports-last
export const scriptFunction = () => {
  const { themeStore } = inject.resolve('themeService')
  const nav = document.querySelector('nav')

  nav!.className = `navbar ${themeStore.get().control}`
  themeStore.subscribe(th => (nav!.className = `navbar ${th.control}`))
}
