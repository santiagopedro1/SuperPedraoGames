<script>
	import '../app.postcss';
	import backIcon from '$lib/back.svg';
	import { page } from '$app/stores';
</script>

<div class="h-screen">
	{#if $page.route.id != '/'}
		<header class="flex justify-center px-3 py-2 bg-purple-900 text-white relative">
			<a
				href="/"
				class="w-fit p-2 absolute left-4 top-2"
			>
				<img
					src={backIcon}
					alt="Back"
				/>
			</a>
			<h1 class="text-xl py-2 font-bold">SUPER PEDRÃO GAMES</h1>
		</header>
	{/if}

	<main>
		<slot />
	</main>
</div>
