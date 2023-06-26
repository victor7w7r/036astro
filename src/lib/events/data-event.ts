import type { WritableAtom } from 'nanostores';

class DataEvent extends Event {

  readonly detail: string;

  constructor(data: string) {
    super('data-event');
    this.detail = data;
  }

}

export const dispatchData = (
  data: string,
  store: WritableAtom<string | undefined>
): void => {
  document.dispatchEvent(
    new DataEvent(data)
  );
  store.set(data);
};

export const listenData = (
  call: (data: string) => void
): void => document.addEventListener(
  'data-event',
  ((e: DataEvent) => call(e.detail)) as EventListener
);