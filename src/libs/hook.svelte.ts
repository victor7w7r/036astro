import { Container } from 'typedi'

import { Testeable } from './di'

export const createHook = () => {
  const testeable = Container.get(Testeable)

  let name = $state(testeable.store.name)
  let inputRef: HTMLInputElement | null =
    typeof document === 'undefined' ? null : document.createElement('input')

  return {
    get getName() {
      return name
    },
    inputRef,
    updateState: () => {
      name = (inputRef as unknown as HTMLInputElement).value
      testeable.store.name = name
    }
  }
}
