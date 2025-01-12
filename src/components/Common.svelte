<script>
  import { createHook } from '../libs/hook.svelte'
  const hook = createHook()
</script>

<p>El estado es: {hook.getName}</p>
<input type="text" placeholder="Escribe algo" bind:this={hook.inputRef} />
<button onclick={hook.updateState}>Actualizar</button>
