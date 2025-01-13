import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('lit-element')
export class MyElement extends LitElement {
  @state() private count = 0

  override readonly render = () => html`
    <button @click=${this._onClick} part="button">
      count is ${this.count}
    </button>
  `

  private readonly _onClick = () => this.count++
}
