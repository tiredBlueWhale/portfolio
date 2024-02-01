<script>
	import { hydrated } from '$lib/hydrated';
	import logo from '$lib/images/tired-blue-whale.png';
	import { Section } from './sections';
	import Greeting from './Greeting.svelte';

	let barAnimation = 'animate-hero-bar';
	let titleAnimation = 'animate-hero-title';
	let subTitleAnimation = 'animate-hero-sub-title';
	let logoAniamtion = 'animate-hero-logo';
	let scrollButtonAnimation = 'animate-intro';

	if (hydrated) {
		titleAnimation = '';
		barAnimation = '';
		subTitleAnimation = '';
		logoAniamtion = '';
		scrollButtonAnimation = '';
	}

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
	<section class="h-full flex justify-center items-center bg-blue-700">
		<div class="relative flex flex-col-reverse md:flex-row justify-center items-center">
			<div>
				<div class="overflow-clip">
					<h1 class="text-6xl md:text-7xl lg:text-9xl px-4 py-2 text-right {titleAnimation}">
						Tired<br />Blue Whale
					</h1>
				</div>
				<div class="flex justify-center">
					<div class="w-full h-1 bg-white {barAnimation}" />
				</div>
				<div class="overflow-clip">
					<h2 class="text-4xl md:text-5xl lg:text-6xl px-4 py-2 text-right {subTitleAnimation}">
						Works
					</h2>
				</div>
			</div>
			<div class="w-8" />
			<div class="overflow-clip">
				<img class="h-48 md:h-64 lg:h-96 {logoAniamtion}" alt="Tired Blue Whale Logo" src={logo} />
			</div>
			<div class="absolute right-0 -bottom-3 lg:-bottom-16 left-0 translate-y-full">
				<Greeting />
			</div>
		</div>
		<div class="absolute bottom-0 left-0 right-0 flex justify-center {scrollButtonAnimation}">
			<div class="flex-1 max-w-header flex justify-end pr-4 xl:pr-8 pb-4 xl:pb-8">
				<button
					type="button"
					class="rounded-full border-2 p-2 animate-bounce"
					aria-label="Scroll down"
					on:click={scrollDown}
				>
					<svg
						class="w-4 h-4 xl:w-8 xl:h-8 text-white"
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
		</div>
	</section>
</Section>
