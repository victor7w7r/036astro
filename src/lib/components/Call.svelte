<script lang='ts'>
import { getBitcoin } from '@/services';

const textStyle =
  'adaptable-center-text text-base lg:text-lg font-semibold';

const btc = getBitcoin();
</script>

{#await btc}
  <slot />
{:then bin}
  <p class={textStyle}>Symbol: {bin?.symbol}</p>
  <p class={textStyle}>Price: {bin?.askPrice}</p>
{/await}