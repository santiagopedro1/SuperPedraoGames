<script lang="ts">
	import { onMount } from 'svelte';
	import PooperScooper from '$lib/Campo.svelte';

	onMount(() => {
		const dialog = document.getElementById('regras') as HTMLDialogElement;
		dialog.showModal();
	});
</script>

<dialog
	id="regras"
	class="backdrop:bg-black/50 rounded-lg"
>
	<div class="flex flex-col items-center justify-center p-4">
		<h2 class="text-2xl m-4">Como jogar:</h2>
		<div class="mb-4">
			<p>Botão esquerdo: scoop</p>
			<p>Botão direito: flag</p>
		</div>
		<form method="dialog">
			<button class="px-4 py-3 rounded-md bg-purple-900 text-white">OK</button>
		</form>
	</div>
</dialog>

<div class="bg-green-600 flex flex-col items-center h-page-h py-6 px-10">
	<h2 class="text-2xl">💩POOPER SCOOPER💩</h2>

	<PooperScooper />
</div>
