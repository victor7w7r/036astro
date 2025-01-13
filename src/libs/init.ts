import { Application } from '@hotwired/stimulus'
import { start } from '@hotwired/turbo'

import { CounterController } from './controller'

const app = Application.start()
app.register('counter', CounterController)

start()
//Turbo.session.drive = true
