<svelte:options
  customElement={{
    tag: 'svelte-element'
  }}
/>

<script>
  let count = $state(0)

  const increment = () => count++
</script>

<button onclick={increment}>count is {count}</button>
