import { render, screen } from '@solidjs/testing-library'

import { errorBinance } from '@/home/business/models'
import { Call } from '@/home/ui/components/call'

const mocks = vi.hoisted(() => ({
  coinsMock: vi.fn().mockReturnValue(new Promise(() => {})),
  getBitcoinUseCaseMock: { exec: vi.fn() }
}))

vi.mock('~/di', () => ({
  inject: {
    resolve: vi
      .fn()
      .mockReturnValue({ getBitcoinUseCase: mocks.getBitcoinUseCaseMock })
  }
}))

vi.mock('solid-js', async () => {
  const actual = await vi.importActual('solid-js')

  return {
    ...actual,
    createResource: vi.fn().mockReturnValue([mocks.coinsMock])
  }
})

describe('call', () => {
  it('should display fallback content if provided', () => {
    expect.assertions(1)

    mocks.coinsMock.mockReturnValue(new Promise(errorBinance))

    render(() => (
      <Call>
        <p>Fallback content</p>
      </Call>
    ))

    expect(screen.getByText(/fallback content/i)).toBeInTheDocument()
  })
})
