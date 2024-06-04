import { html } from 'sinuous'
import { define } from 'uce'

import { scriptFunction } from '@/home/ui/scripts'

const mocks = vi.hoisted(() => ({
  mockChangeBlue: vi.fn(),
  mockChangeEmerald: vi.fn(),
  mockChangePurple: vi.fn(),
  mockChangeRed: vi.fn(),
  mockHtml: vi.fn(),
  mockInject: vi.fn(),
  mockSetCookies: vi.fn(),
  mockSetData: { set: vi.fn() },
  mockThemeStore: {
    get: vi.fn(() => ({ isDark: false })),
    subscribe: vi.fn()
  },
  mockUce: vi.fn()
}))

vi.mock('~/di', () => ({
  inject: {
    resolve: vi.fn().mockReturnValue({
      changeBlue: mocks.mockChangeBlue,
      changeEmerald: mocks.mockChangeEmerald,
      changePurple: mocks.mockChangePurple,
      changeRed: mocks.mockChangeRed,
      themeStore: mocks.mockThemeStore
    })
  }
}))

describe('home', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="buttons-selector"></div>
    `
  })

  it('should define img-reactive component', () => {
    expect.assertions(1)

    scriptFunction()

    expect(define).toHaveBeenCalledWith(
      'img-reactive',
      expect.objectContaining({
        init: expect.any(Function),
        render: expect.any(Function)
      })
    )
  })

  it('should append buttons to #buttons-selector', () => {
    expect.assertions(1)

    scriptFunction()

    expect(html).toHaveBeenCalledWith(
      expect.stringContaining(`
      <button class="blue-button" onclick="${mocks.mockChangeBlue}"></button>
      <button class="purple-button" onclick="${mocks.mockChangePurple}"></button>
      <button class="red-button" onclick="${mocks.mockChangeRed}"></button>
      <button class="emerald-button" onclick="${mocks.mockChangeEmerald}"></button>
    `)
    )
  })

  it('should subscribe to themeStore', () => {
    expect.assertions(1)

    scriptFunction()

    expect(mocks.mockThemeStore.subscribe).toHaveBeenCalledWith(
      expect.any(Function)
    )
  })

  it('should update img-reactive component on themeStore change', () => {
    expect.assertions(1)
    scriptFunction()

    // eslint-disable-next-line @typescript-eslint/prefer-destructuring
    const component = mocks.mockUce.mock.calls[0][1]
    const renderSpy = vi.spyOn(component, 'render')

    mocks.mockThemeStore.get.mockReturnValueOnce({ isDark: true })
    mocks.mockThemeStore.subscribe.mock.calls[0][0]()

    expect(renderSpy).toHaveBeenCalled()
    renderSpy.mockRestore()
  })

  // eslint-disable-next-line vitest/prefer-hooks-on-top
  afterEach(() => {
    document.body.innerHTML = ''
  })
})
