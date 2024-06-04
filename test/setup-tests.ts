import '@testing-library/jest-dom/vitest'

import { cleanup } from '@solidjs/testing-library'
import { afterEach } from 'vitest'

// eslint-disable-next-line toplevel/no-toplevel-side-effect
afterEach(() => {
  cleanup()
})
