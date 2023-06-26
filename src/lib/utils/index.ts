export const buttonCallback = (
  className: string,
  callback: () => void
): void => document
  .querySelector<HTMLButtonElement>(`.${className}`)!
  .addEventListener('click', callback);

export const imageSrc = (
  id: string,
  src: string
): string => document
  .querySelector<HTMLImageElement>(`#${id}`)!
  .src = src;

export const inputValue = (
  className: string
): string => (document
  .querySelector(`.${className}`) as HTMLInputElement
).value;