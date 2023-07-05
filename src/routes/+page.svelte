<script lang="ts">
	import Card from '$lib/Card.svelte';
	const jogos = [
		{
			titulo: 'Pooper Scooper',
			subtitulo: 'Jogo baseado em campo minado',
			link: 'pooperscooper',
			imagem: '/pooperscooper.png'
		}
	];
</script>

<div class="flex flex-col gap-3 px-6 py-4 min-h-screen text-white bg">
	<h1 class="text-center text-7xl leading-relaxed">
		SUPER<br /> PEDRÃO<br /> GAMES
	</h1>

	<div class="mx-12">
		<h2 class="text-2xl mb-8">Jogos</h2>
		<ul class="flex gap-4">
			{#each jogos as jogo}
				<li>
					<Card
						titulo={jogo.titulo}
						subtitulo={jogo.subtitulo}
						link={jogo.link}
						imagem={jogo.imagem}
					/>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	h1 {
		font-family: 'Press Start 2P', cursive;
		animation: pulsate 2s infinite;
	}

	@keyframes pulsate {
		0% {
			text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff48c4, 0 0 30px #ff48c4,
				0 0 40px #ff48c4, 0 0 55px #ff48c4, 0 0 75px #ff48c4;
		}
		50% {
			text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 5px #fff, 0 0 8px #ff48c4, 0 0 12px #ff48c4,
				0 0 15px #ff48c4, 0 0 20px #ff48c4, 0 0 30px #ff48c4;
		}
		100% {
			text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff48c4, 0 0 30px #ff48c4,
				0 0 40px #ff48c4, 0 0 55px #ff48c4, 0 0 75px #ff48c4;
		}
	}

	h2 {
		text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff48c4, 0 0 30px #ff48c4,
			0 0 40px #ff48c4, 0 0 55px #ff48c4, 0 0 75px #ff48c4;
	}

	.bg {
		/* background: rgb(30, 27, 75);
		background: linear-gradient(
			225deg,
			rgba(30, 27, 75, 1) 0%,
			rgba(46, 16, 101, 1) 25%,
			rgba(59, 7, 100, 1) 50%,
			rgba(74, 4, 78, 1) 75%,
			rgba(80, 7, 36, 1) 100%
		); */
		background: rgb(30, 27, 75);
		background: radial-gradient(
			circle,
			rgba(30, 27, 75, 1) 0%,
			rgba(46, 16, 101, 1) 25%,
			rgba(59, 7, 100, 1) 50%,
			rgba(74, 4, 78, 1) 75%,
			rgba(80, 7, 36, 1) 100%
		);
	}
</style>
