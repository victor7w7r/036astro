import '@abraham/reflection'

import { Inject, Service } from 'typedi'

@Service()
export class Store {
  name = 'test'
}

@Service({ transient: true })
export class Testeable {
  @Inject() readonly store!: Store
}
