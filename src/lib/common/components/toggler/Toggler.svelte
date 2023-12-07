<script lang="ts">
  import { theme, toggle } from '@/common/stores/theme-store';

  import './toggler.css';

  $: ({ isDark, togglePeer } = $theme);
</script>

<div class="relative">
  <div class="flex w-full items-center justify-center">
    <label
      for="checked-toggle"
      class="mb-4 inline-flex cursor-pointer items-center"
    >
      <input
        type="checkbox"
        value=""
        id="checked-toggle"
        class="peer sr-only"
        checked={isDark}
        on:change={toggle}
      />
      <div class={`${togglePeer} toggle-design peer`}></div>
      <span class="adaptable-text ml-3 select-none text-sm font-medium">
        Dark Mode
      </span>
    </label>
  </div>
</div>
