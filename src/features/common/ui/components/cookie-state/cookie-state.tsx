import Cookie from 'js-cookie'
import { createSignal, onMount, Show } from 'solid-js'

const design = 'adaptable-center-text text-base lg:text-xl font-semibold'

export const CookieState = () => {
  const [data, setData] = createSignal<string | undefined>('')

  onMount(() => setData(Cookie.get('data')))

  return (
    <Show
      fallback={
        <p class={design}>
          Cookie State: Yes, you write <b>{data()}</b>
        </p>
      }
      when={data() === undefined || data() === ''}
    >
      {<p class={design}>Cookie State: Not yet.</p>}
    </Show>
  )
}
