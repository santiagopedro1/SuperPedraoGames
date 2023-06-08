// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Cell {
		id: number;
		isBad: boolean = false;
		isHidden: boolean = true;
		hasFlag: boolean = false;
		badNearby: number = 0;
	}

	interface Game {
		cells: Cell[];
		width: number;
		height: number;
		badCount: number;
	}
}

export {};
