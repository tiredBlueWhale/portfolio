<script>
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLSpanElement}
	 */
	let heading;
	/**
	 * @type {HTMLSpanElement}
	 */
	let cursor;

	let index = 0;
	let deltaTime = 0;
	let previousTimeStamp = 0;
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

	onMount(() => {
		// return;
		let frame = requestAnimationFrame(type);

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
			} else if (timeStamp < 6000) {
				return;
			}

			deltaTime = 0;
			if (heading.textContent.length < greetings[index].length) {
				cursor.classList.remove('animate-blink');
				heading.textContent += greetings[index][heading.textContent.length];
			} else {
				cursor.classList.add('animate-blink');
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
				cursor.classList.remove('animate-blink');
				heading.textContent = heading.textContent.slice(0, -1);
			} else {
				index += 1;
				if (index >= greetings.length) {
					index = 0;
				}
				cursor.classList.add('animate-blink');
				cancelAnimationFrame(frame);
				frame = requestAnimationFrame(type);
			}
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="flex flex-flow justify-center animate-intro">
	<h1 class="text-5xl md:text-6xl lg:text-7xl text-right pr-2" bind:this={heading}>
		<!-- {greetings[index]} -->
	</h1>
	<span
		class="text-5xl md:text-6xl lg:text-7xl w-1 bg-white text-transparent animate-blink"
		bind:this={cursor}>b</span
	>
</div>
