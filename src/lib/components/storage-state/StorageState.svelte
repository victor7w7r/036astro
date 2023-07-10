<script lang='ts'>
  import { data } from '@/stores/data-store';

  const design =
    'adaptable-center-text text-base lg:text-xl font-semibold';
</script>

<p class={design}>
  Store State:
  {#if $data}
    Yes, you write <b>{ $data }</b>
  {:else}
    Not yet.
  {/if}
</p>