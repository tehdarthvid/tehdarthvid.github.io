<script>
	const MAX_DICE = 20;

	// Which cells of a 3x3 grid hold a pip, per face value.
	const PIPS = {
		1: [4],
		2: [0, 8],
		3: [0, 4, 8],
		4: [0, 2, 6, 8],
		5: [0, 2, 4, 6, 8],
		6: [0, 2, 3, 5, 6, 8]
	};

	// Cube rotation that brings each face value to the front.
	const FACE_ROTATION = {
		1: { x: 0, y: 0 },
		2: { x: -90, y: 0 },
		3: { x: 0, y: -90 },
		4: { x: 0, y: 90 },
		5: { x: 90, y: 0 },
		6: { x: 0, y: 180 }
	};

	// Face values in the same order as the .face elements below.
	const FACES = [1, 6, 3, 4, 2, 5];

	let count = $state(2);
	let rolling = $state(false);
	let rollTimer;

	// Deterministic initial state so the prerendered HTML matches hydration.
	let dice = $state(
		Array.from({ length: MAX_DICE }, () => ({ value: 1, rx: 0, ry: 0, duration: 1000 }))
	);

	const diceCount = $derived(Math.min(MAX_DICE, Math.max(1, Math.floor(Number(count)) || 1)));
	const shown = $derived(dice.slice(0, diceCount));
	const total = $derived(shown.reduce((sum, die) => sum + die.value, 0));

	// Next multiple of 360 at or above `angle`, plus some whole extra turns.
	function spinFrom(angle, target) {
		const turns = 2 + Math.floor(Math.random() * 3);
		return Math.ceil(angle / 360) * 360 + turns * 360 + target;
	}

	function roll() {
		let longest = 0;
		for (const die of shown) {
			const value = 1 + Math.floor(Math.random() * 6);
			const { x, y } = FACE_ROTATION[value];
			die.value = value;
			die.rx = spinFrom(die.rx, x);
			die.ry = spinFrom(die.ry, y);
			die.duration = 900 + Math.floor(Math.random() * 600);
			longest = Math.max(longest, die.duration);
		}
		rolling = true;
		clearTimeout(rollTimer);
		rollTimer = setTimeout(() => (rolling = false), longest);
	}
</script>

<svelte:head>
	<title>dice roller</title>
	<meta name="description" content="dice roller by darthvid" />
	<link
		href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Noto+Sans+JP&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<h1>dice roller</h1>
</header>

<section>
	<div class="input">
		dice: <input
			name="count"
			placeholder="dice"
			type="number"
			min="1"
			max={MAX_DICE}
			bind:value={count}
		/>
		<button class="roll" onclick={roll} disabled={rolling}>roll</button>
	</div>

	<div class="tray">
		{#each shown as die, i (i)}
			<div class="die" data-value={die.value} aria-label="die showing {die.value}" role="img">
				<div
					class="cube"
					style="transform: rotateX({die.rx}deg) rotateY({die.ry}deg); transition-duration: {die.duration}ms;"
				>
					{#each FACES as face (face)}
						<div class="face face-{face}">
							{#each Array(9) as _, cell (cell)}
								<span class="cell">
									{#if PIPS[face].includes(cell)}<span class="pip"></span>{/if}
								</span>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<p class="total" aria-live="polite">total: <span>{rolling ? '…' : total}</span></p>

	<p class="madeby">by <a href="/">darthvid</a></p>
</section>

<style>
	input {
		height: 1.23em;
		font-size: 1.23em;
		width: 3em;
	}
	.input {
		font-size: 2em;
	}
	.roll {
		font-size: 1em;
		font-family: inherit;
		padding: 0 0.75em;
		cursor: pointer;
	}
	.roll:disabled {
		cursor: wait;
	}
	.tray {
		--size: 4rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
		margin: 2.5rem auto;
		max-width: 40rem;
		perspective: 800px;
	}
	.die {
		width: var(--size);
		height: var(--size);
	}
	.cube {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.2, 0.7, 0.3, 1);
	}
	.face {
		position: absolute;
		inset: 0;
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(3, 1fr);
		padding: 12%;
		box-sizing: border-box;
		background: #f7f7f7;
		border: 1px solid #ccc;
		border-radius: 14%;
		backface-visibility: hidden;
		box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.25);
	}
	.cell {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.pip {
		width: 70%;
		height: 70%;
		border-radius: 50%;
		background: #333333;
	}
	.face-1 .pip {
		background: #aa3333;
	}
	.face-1 {
		transform: translateZ(calc(var(--size) / 2));
	}
	.face-6 {
		transform: rotateY(180deg) translateZ(calc(var(--size) / 2));
	}
	.face-3 {
		transform: rotateY(90deg) translateZ(calc(var(--size) / 2));
	}
	.face-4 {
		transform: rotateY(-90deg) translateZ(calc(var(--size) / 2));
	}
	.face-2 {
		transform: rotateX(90deg) translateZ(calc(var(--size) / 2));
	}
	.face-5 {
		transform: rotateX(-90deg) translateZ(calc(var(--size) / 2));
	}
	.total {
		font-size: 2em;
	}
	.madeby {
		font-size: 1em;
	}
	@media (prefers-reduced-motion: reduce) {
		.cube {
			transition-duration: 0ms !important;
		}
	}
</style>
