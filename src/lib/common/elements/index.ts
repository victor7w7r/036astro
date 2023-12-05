import { theme } from '@/common/stores';

const className = 'card-container';

document.querySelectorAll('#card-container').forEach(el => {
  el.className = `${className} ${theme.get().control}`;
  theme.subscribe(th => (el.className = `${className} ${th.control}`));
});
