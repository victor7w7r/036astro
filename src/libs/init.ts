import { Application } from '@hotwired/stimulus'
import { start } from '@hotwired/turbo'

import { CounterController } from './test-stim'

const app = Application.start()
app.register('counter', CounterController)
start()
