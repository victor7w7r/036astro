import { html } from 'sinuous';
import { define } from 'uce';

import {
  changeBlue,
  changePurple,
  changeRed,
  changeEmerald,
  theme
} from '@/common/stores';

type ImgReactiveProps = {
  style: string;
  white: string;
  black: string;
};

const path = (isDark: boolean, white: string, black: string) =>
  `/img/${isDark ? white : black}.png`;

define<ImgReactiveProps, { isDark: boolean }>('img-reactive', {
  init() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    theme.subscribe(_ => this.render());
  },
  render() {
    this.isDark = theme.get().isDark;
    this.html`<img
      alt=''
      class='${this.props.style}'
      src='${path(this.isDark, this.props.white, this.props.black)}'
    />`;
  }
});

document.querySelector('#buttons-selector')?.append(html`
  <button class="blue-button" onclick=${changeBlue}></button>
  <button class="purple-button" onclick=${changePurple}></button>
  <button class="red-button" onclick=${changeRed}></button>
  <button class="emerald-button" onclick=${changeEmerald}></button>
`);
