<script lang='ts'>
  import { theme, toggle } from '@/common/stores/theme-store';

  import '@/common/styles/toggler.css';

  $: ({ isDark, togglePeer } = $theme);
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
        checked={isDark}
        on:change={toggle}
      />
      <div class={`${togglePeer} peer toggle-design`}></div>
      <span class='ml-3 text-sm font-medium adaptable-text select-none'>
        Dark Mode
      </span>
    </label>
  </div>
</div>