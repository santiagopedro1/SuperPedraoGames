<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	export let titulo: string;
	export let subtitulo: string;
	export let link: string;
	export let imagem: string;
</script>

<div class="max-w-2xl mx-auto border-2 border-white rounded-md">
	<img
		class="w-full rounded-t-md max-h-64 object-contain"
		src={imagem}
		alt={titulo}
	/>
	<div class="py-2 px-4">
		<h3 class="text-xl mb-4">{titulo}</h3>
		<p class="mb-2">{subtitulo}</p>
		<button class="px-3 py-2 border-2">
			<a
				class="flex gap-2"
				href={link}>Jogar <ArrowRight /></a
			>
		</button>
	</div>
</div>

<style>
	button {
		border-image: linear-gradient(to right, #38bdf8, #eab308) 1;
	}
</style>
