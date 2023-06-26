import { listenTheme } from '@/events';
import { theme } from '@/stores';

const { control } = theme.get();

const container = document
  .querySelector<HTMLDivElement>('nav')!;

container.classList.add(control);

listenTheme((theme) => {
  const classes = container!.classList;
  classes.remove(classes[classes.length - 1]!);
  classes.add(theme.control);
});