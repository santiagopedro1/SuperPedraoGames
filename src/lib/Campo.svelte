<script lang="ts">
	import Cell from '$lib/Cell.svelte';
	import { confetti } from '@neoconfetti/svelte';
	import { createNew, updateStatus, stepInto, toggleFlag } from '$lib/game';

	export let dificuldade = 'facil';

	let width = 9;
	let height = 9;
	let badCount = 10;

	switch (dificuldade) {
		case 'facil':
			break;
		case 'medio':
			width = 12;
			height = 12;
			badCount = 20;
			break;
		case 'dificil':
			width = 16;
			height = 16;
			badCount = 40;
			break;
	}

	let status = 'running';
	$: status = updateStatus(cells);
	$: check(status);

	let cells = createNew(width, height, badCount);

	function check(status: string) {
		if (status === 'lost') {
			const dialog = document.getElementById('perdeu') as HTMLDialogElement;
			dialog.showModal();
		}
	}

	function onRestart() {
		status = 'running';
		cells = createNew(width, height, badCount);
	}

	function onStep(event: CustomEvent<{ id: number }>) {
		cells = stepInto(event.detail.id, { width, height, badCount, cells });
	}
	function onToggleFlag(event: CustomEvent<{ id: number }>) {
		cells = toggleFlag(event.detail.id, { width, height, badCount, cells });
	}
</script>

<dialog
	id="perdeu"
	class="backdrop:bg-black/50 rounded-lg"
>
	<div class="flex flex-col items-center justify-center p-4">
		<h3 class="text-2xl m-4">💩Ew💩</h3>
		<div class="mb-4">
			<p>Você pegou uma merda!</p>
		</div>
		<form method="dialog">
			<button class="px-4 py-3 rounded-md bg-purple-900 text-white">OK</button>
		</form>
	</div>
</dialog>

<div
	class="grid p-6"
	style={`grid-template-columns: repeat(${width}, 2.5rem); grid-template-rows: repeat(${height}, 2.5rem);`}
	on:contextmenu={(e) => e.preventDefault()}
>
	{#each cells as cell (cell.id)}
		<Cell
			{...cell}
			on:stepInto={status === 'running' ? onStep : undefined}
			on:toggleFlag={status === 'running' ? onToggleFlag : undefined}
		/>
	{/each}
</div>

{#if status != 'running'}
	<button
		on:click={onRestart}
		class="py-3 px-4 bg-fuchsia-950 text-white rounded-xl"
	>
		Recomeçar
	</button>
{/if}

{#if status === 'win'}
	<div
		style="position: absolute; left: 50%; top: 30%"
		use:confetti={{
			force: 0.7,
			stageWidth: window.innerWidth,
			stageHeight: window.innerHeight - 250,
			colors: ['#ff3e00', '#40b3ff', '#676778']
		}}
	/>
{/if}
