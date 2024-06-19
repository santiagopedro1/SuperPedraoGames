<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';

	import GameCard from '$lib/components/game-card.svelte';

	import { Info } from 'lucide-svelte';

	const games = [
		{
			name: 'Super Pedrao',
			desc: 'A game about a superhero who has to save the world from a villain.',
			href: '#'
		},
		{
			name: 'Super Pedrao',
			desc: 'A game about a superhero who has to save the world from a villain.',
			href: '#'
		},
		{
			name: 'Super Pedrao',
			desc: 'A game about a superhero who has to save the world from a villain.',
			href: '#'
		},
		{
			name: 'Super Pedrao',
			desc: 'A game about a superhero who has to save the world from a villain.',
			href: '#'
		},
		{
			name: 'Super Pedrao',
			desc: 'A game about a superhero who has to save the world from a villain.',
			href: '#'
		},
		{
			name: 'Super Pedrao',
			desc: 'A game about a superhero who has to save the world from a villain.',
			href: '#'
		}
	];
</script>

<svelte:head>
	<title>Super Pedrao Games</title>
</svelte:head>

<header class="grid place-items-center py-8">
	<div class="relative">
		<img
			src="logo.png"
			alt="Super Pedrao Games"
			class="max-w-lg rounded-lg lg:w-full"
		/>
		<div class="absolute right-0 top-0 m-4">
			<Tooltip.Root>
				<Tooltip.Trigger
					asChild
					let:builder
				>
					<Button
						builders={[builder]}
						variant="ghost"
						size="icon"
						class="cursor-help hover:bg-inherit"
					>
						<Info />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content class="text-lg">
					<p>This image was AI generated.</p>
					<p>Any "problems" with it are features of its creativity and uniqueness.</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</div>
</header>

<main class="container space-y-8">
	<h1 class="text-center text-4xl">Games</h1>
	<div class="grid grid-cols-2 gap-6">
		{#each games as gameInfo}
			<GameCard {gameInfo} />
		{/each}
	</div>
</main>
