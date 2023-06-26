import { listenTheme } from '@/events';
import { theme } from '@/stores';

const { isDark, white, dark } = theme.get();

const currentTheme: string[] = [];
const container = document.querySelector<HTMLDivElement>(
  '[global-container]'
)!;

if(isDark) document.body.classList.add('dark');
container.classList.add(white, dark);

listenTheme((th) => {
  container.classList.remove(...currentTheme);
  currentTheme.splice(0);
  currentTheme.push(th.white, th.dark);
  container.classList.add(...currentTheme);
});