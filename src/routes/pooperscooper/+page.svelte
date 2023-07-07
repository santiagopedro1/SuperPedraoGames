<script lang="ts">
	import { onMount } from 'svelte';
	import PooperScooper from '$lib/Campo.svelte';
	import { ArrowLeft } from 'lucide-svelte';

	let dificuldade: string;
	let pronto = false;

	function setDificuldade() {
		// eslint-disable-next-line no-undef
		const radios = document.getElementsByName('dificuldade') as NodeListOf<HTMLInputElement>;
		let dificuldadeEscolhida = 'facil';
		for (let i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				dificuldadeEscolhida = radios[i].value as string;
				break;
			}
		}
		dificuldade = dificuldadeEscolhida;
		pronto = true;
	}

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
		<label for="diff">Dificuldade:</label>
		<fieldset
			id="diff"
			class="flex gap-3 my-3"
		>
			<input
				type="radio"
				name="dificuldade"
				value="facil"
				checked
			/>
			Fácil<br />
			<input
				type="radio"
				name="dificuldade"
				value="medio"
			/>
			Médio<br />
			<input
				type="radio"
				name="dificuldade"
				value="dificil"
			/>
			Difícil<br />
		</fieldset>
		<form method="dialog">
			<button
				class="px-4 py-3 rounded-md bg-purple-900 text-white"
				on:click={setDificuldade}>OK</button
			>
		</form>
	</div>
</dialog>

<div class="bg-green-600 min-h-screen">
	<header class="flex items-center relative py-2 px-6">
		<a
			href="/"
			class="py-4 px-2 absolute"
		>
			<ArrowLeft class="text-black w-8 h-8" />
		</a>
		<h2 class="text-2xl mx-auto">💩 POOPER SCOOPER 💩</h2>
	</header>

	{#if pronto}
		<div class="flex justify-center">
			<PooperScooper {dificuldade} />
		</div>
	{/if}
</div>
