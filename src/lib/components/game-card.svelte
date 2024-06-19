<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from './ui/button/button.svelte';

	export let gameInfo: { name: string; desc: string; href: string };
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{gameInfo.name}</Card.Title>
	</Card.Header>
	<Card.Content>
		<p>{gameInfo.desc}</p>
	</Card.Content>
	<Card.Footer class="justify-end">
		<Button
			variant="secondary"
			href={gameInfo.href}>Play</Button
		>
	</Card.Footer>
</Card.Root>
