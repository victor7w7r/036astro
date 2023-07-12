<script lang='ts'>
import { theme, toggle } from '@/stores/theme-store';

import '@/styles/toggler.css';
</script>

<div class='relative'>
  <div class='flex items-center justify-center w-full'>
    <label
      for='checked-toggle'
      class='inline-flex items-center mb-4 cursor-pointer'
    >
      <input
        type='checkbox'
        value=''
        id='checked-toggle'
        class='sr-only peer'
        checked={$theme.isDark}
        on:change={toggle}
      />
      <div class={`${$theme.togglePeer} peer toggle-design`}></div>
      <span class='ml-3 text-sm font-medium adaptable-text select-none'>
        Dark Mode
      </span>
    </label>
  </div>
</div>