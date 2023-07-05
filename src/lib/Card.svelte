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
		<button class="py-2 px-4 bg-indigo-300 text-black rounded-md">
			<a
				class="flex gap-2"
				href={link}>Jogar <ArrowRight /></a
			>
		</button>
	</div>
</div>
