import '@abraham/reflection'

import { Container, Inject, Service } from 'typedi'

@Service()
export class Store {
  name = 'test'
  constructor() {
    console.log('Store created')
  }
}

@Service({ transient: true })
export class Testeable {
  @Inject() readonly store!: Store
}

export const testeable = Container.get(Testeable)
