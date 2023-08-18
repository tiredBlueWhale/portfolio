<script>
	import logo from '$lib/images/tired-blue-whale.png';
	import { Section } from './sections';
	import Greeting from './Greeting.svelte';

	/**
	 * @type {number}
	 */
	let outerHeight;

	function scrollDown() {
		window.scrollTo({
			top: outerHeight * 1.1,
			left: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:window bind:outerHeight />

<Section sectionId="hero" zIndex="z-[10]">
	<section class="h-full flex justify-center items-center bg-hero">
		<div class="relative flex flex-col-reverse md:flex-row justify-center items-center">
			<div class="animate-fade animate-once animate-duration-[1ms] animate-delay-[2ms]">
				<h1 class="text-6xl md:text-7xl lg:text-9xl px-4 py-2 text-right border-b-2 border-white">
					Tired<br />Blue Whale
				</h1>
				<h2 class="text-4xl md:text-5xl lg:text-6xl px-4 py-2 text-right">Works</h2>
			</div>
			<div class="w-8" />
			<img class="h-48 md:h-64 lg:h-96 object-contain" alt="Tired Blue Whale Logo" src={logo} />
			<div class="absolute right-0 -bottom-3 lg:-bottom-16 left-0 translate-y-full">
				<Greeting />
			</div>
		</div>
		<div class="animate-[fade-in_4s_ease-in-out]">
			<button
				type="button"
				class="absolute right-4 lg:right-10 bottom-4 lg:bottom-8 rounded-full border-2 p-2 animate-bounce"
				on:click={scrollDown}
			>
				<svg
					class="w-4 h-4 lg:w-8 lg:h-8 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 1v12m0 0 4-4m-4 4L1 9"
					/>
				</svg>
			</button>
		</div>
	</section>
</Section>
