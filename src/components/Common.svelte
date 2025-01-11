<script lang="ts">
  import { testeable } from 'src/libs/store'

  let name = $state(testeable.store.name)

  let input: HTMLInputElement

  const updateState = () => {
    name = input.value
    testeable.store.name = name
  }
</script>

<p>El estado es: {name}</p>
<input type="text" src="" alt="" placeholder="Escribe algo" bind:this={input} />
<button onclick={updateState}>Actualizar</button>
