<script lang='ts'>
  import Cookie from 'js-cookie';

  const data = Cookie.get('data');
  const design =
    'adaptable-center-text text-base lg:text-xl font-semibold';
</script>

{#if data}
  <p class={design}>Cookie State: Yes, you write <b>{ data }</b></p>
{:else}
  <p class={design}>Cookie State: Not yet.</p>
{/if}