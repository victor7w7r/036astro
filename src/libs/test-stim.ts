import { Controller } from '@hotwired/stimulus'

export class CounterController extends Controller<HTMLDivElement> {
  static override targets = ['btn']

  declare readonly btnTarget: HTMLButtonElement

  counterizer = 0

  override connect() {
    this.btnTarget.innerHTML = `count is ${this.counterizer.toString()}`
  }

  increment() {
    this.counterizer++
    this.btnTarget.innerHTML = `count is ${this.counterizer.toString()}`
  }
}

/*
static values = {
  code: String
}

declare codeValue: string
declare readonly hasCodeValue: boolean

static targets = [ "input" ]

declare readonly hasInputTarget: boolean
declare readonly inputTarget: HTMLInputElement
declare readonly inputTargets: HTMLInputElement[]

static outlets = [ "user-status" ]

declare readonly hasUserStatusOutlet: boolean
declare readonly userStatusOutlet: UserStatusController
declare readonly userStatusOutlets: UserStatusController[]
declare readonly userStatusOutletElement: Element
declare readonly userStatusOutletElements: Element[]
*/
