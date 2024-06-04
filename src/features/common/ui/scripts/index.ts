import { inject } from '~/di'

// eslint-disable-next-line import/exports-last
export const scriptFunction = () => {
  const className = 'card-container'

  const { themeStore } = inject.resolve('themeService')

  for (const el of document.querySelectorAll('#card-container')) {
    el.className = `${className} ${themeStore.get().control}`
    themeStore.subscribe(th => (el.className = `${className} ${th.control}`))
  }
}
