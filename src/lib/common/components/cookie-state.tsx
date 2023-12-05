/* eslint-disable no-undefined */
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Cookie from 'js-cookie';

const design = 'adaptable-center-text text-base lg:text-xl font-semibold';

export const CookieState = component$(() => {
  const data = useSignal<string | undefined>('');

  useVisibleTask$(() => {
    data.value = Cookie.get('data');
  });

  return (
    <p class={design}>
      Cookie State:
      {data.value !== undefined ? (
        <>
          Yes, you write <b>{data}</b>
        </>
      ) : (
        <>Not yet.</>
      )}
    </p>
  );
});
