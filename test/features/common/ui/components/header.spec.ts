import { scriptFunction } from '@/common/ui/components/header/header'

const mocks = vi.hoisted(() => ({
  mockThemeStore: {
    get: vi.fn().mockReturnValue({ control: 'initial-control' }),
    subscribe: vi.fn()
  }
}))

vi.mock('~/di', () => ({
  inject: {
    resolve: vi.fn().mockReturnValue({ themeStore: mocks.mockThemeStore })
  }
}))

describe('header', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <nav class="navbar" id="navbar"></nav>
    `
  })

  it('should set the initial className of the nav element', () => {
    expect.assertions(1)

    scriptFunction()

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const nav = document.querySelector('nav')!
    expect(nav.className).toBe('navbar initial-control')
  })

  it('should update the className of the nav element on theme change', () => {
    expect.assertions(1)

    mocks.mockThemeStore.subscribe.mockImplementation(callback => {
      callback({ control: 'updated-control' })
    })

    scriptFunction()

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const nav = document.querySelector('nav')!
    expect(nav.className).toBe('navbar updated-control')
  })
})
