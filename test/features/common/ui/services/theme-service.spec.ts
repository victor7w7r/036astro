import { persistentAtom } from '@nanostores/persistent'

import { themeService } from '@/common/ui/services'

const mocks = vi.hoisted(() => ({
  mockThemeStore: {
    get: vi.fn(),
    set: vi.fn(),
    subscribe: vi.fn()
  }
}))

vi.mock('@nanostores/persistent', () => ({
  persistentAtom: vi.fn().mockReturnValue(mocks.mockThemeStore)
}))

describe('themeService', () => {
  it('should initialize themeStore with persistentAtom', () => {
    expect.assertions(2)

    const { themeStore } = themeService()

    expect(persistentAtom).toHaveBeenCalledWith(
      'theme',
      {
        control: 'bg-slate-700/30',
        dark: 'dark:bg-zinc-900',
        isDark: false,
        togglePeer: '',
        white: 'bg-white'
      },
      {
        decode: JSON.parse,
        encode: JSON.stringify
      }
    )
    expect(themeStore).toBe(mocks.mockThemeStore)
  })

  it('should set dark mode correctly', () => {
    expect.assertions(1)

    const { setDark } = themeService()
    mocks.mockThemeStore.get.mockReturnValue({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })

    setDark(true)

    expect(mocks.mockThemeStore.set).toHaveBeenCalledWith({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: true,
      togglePeer: '',
      white: 'bg-white'
    })
  })

  it('should toggle dark mode', () => {
    expect.assertions(2)

    const { toggle } = themeService()
    mocks.mockThemeStore.get.mockReturnValue({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })

    toggle()

    expect(mocks.mockThemeStore.set).toHaveBeenCalledWith({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: true,
      togglePeer: 'peer-checked:bg-dark',
      white: 'bg-white'
    })
    expect(document.documentElement.classList.contains('dark')).toBeTruthy()
  })

  it('should change theme selector to blue', () => {
    expect.assertions(1)

    const { changeBlue } = themeService()
    mocks.mockThemeStore.get.mockReturnValue({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })

    changeBlue()

    expect(mocks.mockThemeStore.set).toHaveBeenCalledWith({
      control: 'bg-sky-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: 'peer-checked:bg-sky-300',
      white: 'bg-sky-300'
    })
  })

  it('should change theme selector to purple', () => {
    expect.assertions(1)

    const { changePurple } = themeService()
    mocks.mockThemeStore.get.mockReturnValue({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })

    changePurple()

    expect(mocks.mockThemeStore.set).toHaveBeenCalledWith({
      control: 'bg-purple-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: 'peer-checked:bg-purple-300',
      white: 'bg-purple-300'
    })
  })

  it('should change theme selector to red', () => {
    expect.assertions(1)

    const { changeRed } = themeService()
    mocks.mockThemeStore.get.mockReturnValue({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })

    changeRed()

    expect(mocks.mockThemeStore.set).toHaveBeenCalledWith({
      control: 'bg-red-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: 'peer-checked:bg-red-300',
      white: 'bg-red-300'
    })
  })

  it('should change theme selector to emerald', () => {
    expect.assertions(1)

    const { changeEmerald } = themeService()
    mocks.mockThemeStore.get.mockReturnValue({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })

    changeEmerald()

    expect(mocks.mockThemeStore.set).toHaveBeenCalledWith({
      control: 'bg-emerald-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: false,
      togglePeer: 'peer-checked:bg-emerald-300',
      white: 'bg-emerald-300'
    })
  })
})
