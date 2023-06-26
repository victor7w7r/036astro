<script lang='ts'>
  import { data } from '@/stores/data-store';

  const design =
    'adaptable-center-text text-base lg:text-xl font-semibold';
</script>

{#if $data}
  <p class={design}>Store State: Yes, you write <b>{ $data }</b></p>
{:else}
  <p class={design}>Store State: Not yet.</p>
{/if}