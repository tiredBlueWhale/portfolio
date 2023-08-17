<script>
	import logo from '$lib/images/tired-blue-whale.png';
	import Section from './Section.svelte';
	import Greeting from './Greeting.svelte';

	/**
	 * @type {number}
	 */
	let height;

	function scrollDown() {
		window.scrollTo({
			top: height * 1.1,
			left: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:window bind:innerHeight={height} />

<Section zIndex="z-[10]" color="bg-blue-800">
	<section id="Hero" class="h-full flex justify-center items-center bg-blue-800">
		<div
			class="relative px-8 lg:px-32 flex flex-col-reverse lg:flex-row justify-center items-center"
		>
			<div class="animate-fade animate-once animate-duration-[1ms] animate-delay-[2ms]">
				<h1 class="text-5xl lg:text-9xl px-4 py-2 text-right border-b-2 border-white">
					Tired<br />Blue Whale
				</h1>
				<h2 class="text-3xl lg:text-6xl px-4 py-2 text-right">Works</h2>
			</div>
			<div class="w-8" />
			<img class="h-48 md:h-64 lg:h-96 object-contain" alt="Tired Blue Whale Logo" src={logo} />
			<div class="absolute right-0 -bottom-3 lg:-bottom-16 left-0 translate-y-full">
				<Greeting />
			</div>
		</div>
		<button
			type="button"
			class="absolute right-8 bottom-8 rounded-full border-2 p-3 animate-[fade-in_4s_ease-in-out] animate-bounce"
			on:click={scrollDown}
		>
			<svg
				class="w-2 h-2 lg:w-6 lg:h-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 6"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
				/>
			</svg>

			<span class="sr-only">Icon description</span>
		</button>
	</section>
</Section>
