import { $ } from 'carbonium';
import { theme } from '@/common/stores';

const className = 'card-container';

$('#card-container').forEach(el => {
  el.className = `${className} ${theme.get().control}`;
  theme.subscribe(th => (el.className = `${className} ${th.control}`));
});
