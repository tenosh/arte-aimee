<script lang="ts">
  let x = 0
	let y = 0
	let diego = `brah`;

	function yPlusAValue(value) {
		return value + y
	}
	$: total = yPlusAValue(x)
</script>
<main>
  Total: {total}
<button on:click={() => x++}>
	Increment X
</button>

<button on:click={() => y++}>
	Increment Y
</button>
</main>
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
