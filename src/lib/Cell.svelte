<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let id: number;
	export let isHidden = true;
	export let isBad = false;
	export let hasFlag = false;
	export let badNearby = 0;

	const dispatch = createEventDispatcher();

	function step() {
		if (!hasFlag) {
			dispatch('stepInto', { id });
		}
	}

	function flag(event: MouseEvent) {
		event.preventDefault();
		if (isHidden) {
			dispatch('toggleFlag', { id });
		}
	}
</script>

<button
	class="{isHidden
		? 'bg-green-950'
		: isBad
		? 'bg-black'
		: 'bg-green-300'} aspect-square w-8 text-black rounded-md font-bold select-none"
	on:click={step}
	on:contextmenu={flag}
>
	{#if isBad && !isHidden}
		💩
	{/if}
	{#if hasFlag}
		🚩
	{/if}
	{#if !isHidden && badNearby > 0}
		{badNearby}
	{/if}
</button>
