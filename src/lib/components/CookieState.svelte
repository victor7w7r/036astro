<script lang='ts'>
import Cookie from 'js-cookie';

const data = Cookie.get('data');
const design =
  'adaptable-center-text text-base lg:text-xl font-semibold';
</script>

<p class={design}>
  Cookie State:
  {#if data}
    Yes, you write <b>{ data }</b>
  {:else}
    Not yet.
  {/if}
</p>