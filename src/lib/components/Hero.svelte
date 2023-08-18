<script>
	import logo from '$lib/images/tired-blue-whale.png';
	import { Section } from './sections';
	import Greeting from './Greeting.svelte';
	import { AnimationOnFirstLoad } from './animations';
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
			<div>
				<div class="overflow-clip">
					<AnimationOnFirstLoad animation="animate-hero-title">
						<h1 class="text-6xl md:text-7xl lg:text-9xl px-4 py-2 text-right">
							Tired<br />Blue Whale
						</h1>
					</AnimationOnFirstLoad>
				</div>
				<div class="flex justify-center">
					<AnimationOnFirstLoad style="w-full" animation="animate-hero-bar">
						<div class="h-1 bg-white" />
					</AnimationOnFirstLoad>
				</div>
				<div class="overflow-clip">
					<AnimationOnFirstLoad animation="animate-hero-sub-title">
						<h2 class="text-4xl md:text-5xl lg:text-6xl px-4 py-2 text-right">Works</h2>
					</AnimationOnFirstLoad>
				</div>
			</div>
			<div class="w-8" />
			<div class="overflow-clip">
				<AnimationOnFirstLoad animation="animate-hero-logo">
					<img class="h-48 md:h-64 lg:h-96 aspect-square" alt="Tired Blue Whale Logo" src={logo} />
				</AnimationOnFirstLoad>
			</div>
			<div class="absolute right-0 -bottom-3 lg:-bottom-16 left-0 translate-y-full">
				<AnimationOnFirstLoad animation="animate-intro">
					<Greeting />
				</AnimationOnFirstLoad>
			</div>
		</div>
		<AnimationOnFirstLoad animation="animate-intro">
			<div class="absolute bottom-0 left-0 right-0 flex justify-center">
				<div class="flex-1 max-w-header flex justify-end pr-4 xl:pr-8 pb-4 xl:pb-8">
					<button
						type="button"
						class="rounded-full border-2 p-2 animate-bounce"
						aria-label="Scroll down"
						on:click={scrollDown}
					>
						<svg
							class="w-4 h-4 xl:w-8 xl:h-8 text-gray-800 dark:text-white"
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
		</AnimationOnFirstLoad>
	</section>
</Section>
