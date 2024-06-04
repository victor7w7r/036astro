/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { inject } from '~/di'

// eslint-disable-next-line import/exports-last
export const scriptFunction = () => {
  const { themeStore } = inject.resolve('themeService')

  const className = 'app min-h-screen transition-colors duration-1000'
  const main = document.querySelector('main')

  main!.className = `${className} ${themeStore.get().white} ${themeStore.get().dark}`
  themeStore.subscribe(
    th => (main!.className = `${className} ${th.white} ${th.dark}`)
  )
}
