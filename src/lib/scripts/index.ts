import { listenTheme } from '@/events';
import {
  changeBlue, changePurple,
  changeRed, changeEmerald, theme
} from '@/stores';
import { buttonCallback, imageSrc } from '@/utils';

const { isDark, control } = theme.get();

document.querySelectorAll<HTMLDivElement>('.card-container')
  .forEach((container) => {
    const classes = container.classList;
    classes.add(control);
    listenTheme((theme) => {
      classes.remove(classes[classes.length - 1]!);
      classes.add(theme.control);
    });
  });

buttonCallback('blue-button', changeBlue);
buttonCallback('purple-button', changePurple);
buttonCallback('red-button', changeRed);
buttonCallback('emerald-button', changeEmerald);

imageSrc('imageone', `/img/${isDark ? 'brandwhite': 'brand'}.png`);
imageSrc('imagetwo', `/img/${isDark ? 'tailwindwhite': 'tailwind'}.png`);

listenTheme(theme => {
  imageSrc('imageone', `/img/${theme.isDark ? 'brandwhite': 'brand'}.png`);
  imageSrc('imagetwo', `/img/${theme.isDark ? 'tailwindwhite': 'tailwind'}.png`);
});