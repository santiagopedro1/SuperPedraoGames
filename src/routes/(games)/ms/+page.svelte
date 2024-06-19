<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Label, type Selected } from '$lib/components/ui/label';
	import Input from '$lib/components/ui/input/input.svelte';

	const difficulties: Array<Selected<string>> = [
		{ value: 'easy', label: 'Easy' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'hard', label: 'Hard' },
		{ value: 'custom', label: 'Custom' }
	];

	let width = 8;
	let height = 8;
	let mines = 10;

	let isPlaying = false;

	let difficulty = difficulties[0];

	function setDifficulty(d: Selected<string> | undefined) {
		if (!d) return;

		difficulty = d;

		switch (difficulty.value) {
			case 'easy':
				width = 8;
				height = 8;
				mines = 10;
				break;
			case 'medium':
				width = 16;
				height = 16;
				mines = 40;
				break;
			case 'hard':
				width = 24;
				height = 24;
				mines = 100;
				break;
			case 'custom':
				// Keep current width, height, and mines
				break;
		}
	}

	function vai() {
		console.log(width, height, mines);
		isPlaying = true;
	}

	// Reactive statement to update difficulty based on width, height, and mines
	$: {
		if (width === 8 && height === 8 && mines === 10) {
			difficulty = difficulties.find((d) => d.value === 'easy')!;
		} else if (width === 16 && height === 16 && mines === 40) {
			difficulty = difficulties.find((d) => d.value === 'medium')!;
		} else if (width === 24 && height === 24 && mines === 100) {
			difficulty = difficulties.find((d) => d.value === 'hard')!;
		} else {
			difficulty = difficulties.find((d) => d.value === 'custom')!;
		}
	}
</script>

<main>
	<h2 class="text-center">Minesweeper</h2>
	<div class="container py-8">
		{#if isPlaying}
			{@const total = width * height}
			<div
				class="grid justify-center gap-2"
				style="grid-template-columns: repeat({width}, 36px); grid-template-rows: repeat({height}, 36px);"
			>
				{#each Array(total) as _, i}
					<div
						id="cell-{i}"
						class="size-9 rounded-lg bg-[#f72585]"
					></div>
				{/each}
			</div>
		{:else}
			<div class="mx-auto max-w-96 space-y-6">
				<div>
					<Select.Root
						selected={difficulty}
						onSelectedChange={setDifficulty}
					>
						<Label class="text-lg opacity-70">Difficulty</Label>
						<Select.Trigger class="h-fit text-xl">
							<Select.Value />
						</Select.Trigger>
						<Select.Content>
							{#each difficulties as { value, label }}
								<Select.Item {value}>{label}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="flex items-center gap-4">
					<div>
						<Label class="text-lg opacity-70">Width</Label>
						<Input
							type="number"
							name="width"
							pattern="[0-9]*"
							inputmode="numeric"
							min="5"
							max="40"
							class="text-xl"
							bind:value={width}
						/>
					</div>
					<div>
						<Label class="text-lg opacity-70">Height</Label>
						<Input
							type="number"
							name="height"
							pattern="[0-9]*"
							inputmode="numeric"
							min="5"
							max="40"
							class="text-xl"
							bind:value={height}
						/>
					</div>
				</div>
				<div>
					<Label class="text-lg opacity-70">Mines</Label>
					<Input
						type="number"
						name="mines"
						pattern="[0-9]*"
						inputmode="numeric"
						min="1"
						max="64"
						class="text-xl"
						bind:value={mines}
					/>
				</div>
				<Button
					class="w-full"
					on:click={vai}
				>
					Play
				</Button>
			</div>
		{/if}
	</div>
</main>
