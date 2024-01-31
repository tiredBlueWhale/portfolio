<script>
	import { onMount } from 'svelte';
	import { hydrated } from '$lib/hydrated';

	/**
	 * @type {HTMLSpanElement}
	 */
	let heading;
	/**
	 * @type {HTMLSpanElement}
	 */
	let cursor;
	let blinkAnimation = 'animate-blink';
	let introAnimation = 'animate-intro';

	const greetings = [
		'Hello',
		'Moi',
		'Hola',
		'Bonjour',
		'Ciao',
		'こんにちは',
		'안녕하세요',
		'Hallo',
		'你好',
		'नमस्ते'
	];

	if (hydrated) {
		introAnimation = '';
	}

	onMount(() => {
		let frame = requestAnimationFrame(type);
		let index = 0;
		let deltaTime = 0;
		let previousTimeStamp = 0;

		/**
		 * @param {number} timeStamp
		 */
		function type(timeStamp) {
			deltaTime += timeStamp - previousTimeStamp;
			previousTimeStamp = timeStamp;
			frame = requestAnimationFrame(type);

			if (heading.textContent == undefined) heading.textContent = '';

			if (heading.textContent === '' && deltaTime < 600) {
				return;
			} else if (deltaTime < 300) {
				return;
			} else if (timeStamp < 4000) {
				return;
			}

			deltaTime = 0;
			if (heading.textContent.length < greetings[index].length) {
				blinkAnimation = '';
				heading.textContent += greetings[index][heading.textContent.length];
			} else {
				blinkAnimation = 'animate-blink';
				cancelAnimationFrame(frame);
				frame = requestAnimationFrame(erase);
			}
		}

		/**
		 * @param {number} timeStamp
		 */
		function erase(timeStamp) {
			deltaTime += timeStamp - previousTimeStamp;
			previousTimeStamp = timeStamp;
			frame = requestAnimationFrame(erase);

			if (heading.textContent == undefined) heading.textContent = '';

			if (heading.textContent.length == greetings[index].length && deltaTime < 1000) {
				return;
			} else if (deltaTime < 200) {
				return;
			}

			deltaTime = 0;
			if (heading.textContent.length > 0) {
				blinkAnimation = '';
				heading.textContent = heading.textContent.slice(0, -1);
			} else {
				index += 1;
				if (index >= greetings.length) {
					index = 0;
				}
				blinkAnimation = 'animate-blink';
				cancelAnimationFrame(frame);
				frame = requestAnimationFrame(type);
			}
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="flex flex-flow justify-center {introAnimation}">
	<!-- svelte-ignore a11y-missing-content -->
	<h1 class="text-5xl md:text-6xl lg:text-7xl text-right pr-2" bind:this={heading} />
	<span
		class="text-5xl md:text-6xl lg:text-7xl w-1 bg-white text-transparent {blinkAnimation}"
		bind:this={cursor}>b</span
	>
</div>
