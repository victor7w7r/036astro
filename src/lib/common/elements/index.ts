import { define, useEffect } from 'hooked-elements';

import { theme } from '@/common/stores';

const className = 'card-container';

define('div#card-container', (el: HTMLElement) =>
  useEffect(() => {
    el.className = `${className} ${theme.get().control}`;
    theme.subscribe(th => (el.className = `${className} ${th.control}`));
  })
);
