import { define } from 'uce';
import { html, render } from 'uhtml';

import {
  changeBlue, changePurple,
  changeRed, changeEmerald, theme
} from '@/common/stores';

type ImgReactiveProps = {
  style: string,
  white: string,
  black: string
};

const path = (
  isDark: boolean,
  white: string,
  black: string
) => `/img/${isDark ? white : black}.png`;

define<ImgReactiveProps, { isDark: boolean }>(
  'img-reactive', {
    render() {
      this.isDark = theme.get().isDark;
      theme.subscribe(th => this.isDark = th.isDark);
      this.html`<img
        alt=''
        class='${this.props.style}'
        src='${path(this.isDark, this.props.white, this.props.black)}'
      />`;
    }
  });

render(
  document.querySelector('#buttons-selector') ?? document.body,
  html`
    <button class='blue-button' onclick=${changeBlue}></button>
    <button class='purple-button' onclick=${changePurple}></button>
    <button class='red-button' onclick=${changeRed}></button>
    <button class='emerald-button' onclick=${changeEmerald}></button>
  `
);