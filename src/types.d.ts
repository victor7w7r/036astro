/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module '@hotwired/turbo' {
  export function start() {}
}

interface Window {
  Alpine: import('alpinejs').Alpine
}
