<script>
	import apple from '$lib/images/apple-badge.svg';
	import google from '$lib/images/google-play-badge.png';
	import { base } from '$app/paths';

	export let title = 'Stay Inside';
	export let subTitle = 'Fast passed hyper casual mobile game';
	export let description =
		'The goal is to stay inside the outer circle, which changes speed, size and rythm.';
</script>

<section class="flex flex-col pb-safe">
	<div class="lg:flex-1" />
	<h3 class="text-xs lg:text-base">Game</h3>
	<h1 class="text-xl lg:text-6xl font-bold">{title}</h1>
	<h2 class="text-lg lg:text-3xl pb-1 lg:pb-4">{subTitle}</h2>
	<p class="text-base lg:text-xl pb-1 lg:pb-4">{description}</p>
	<a class="text-base lg:text-xl pb-2 lg:pb-8" href="{base}/more">Learn More</a>
	<div class="flex flex-wrap gap-2 lg:gap-4">
		<a href="https://www.google.com"
			><img class="h-11 lg:h-16 object-contain" alt="Download on the App Store" src={apple} /></a
		>
		<a href="https://www.google.com"
			><img class="h-11 lg:h-16 object-contain" alt="Get it on Google Play" src={google} /></a
		>
	</div>
	<div class="flex-1 lg:grow-[1.6] lg:shrink" />

	<div class="flex gap-4">
		<a class="text-xs lg:text-base" href="https://www.google.com">GitHub</a>
		<a class="text-xs lg:text-base" href="{base}/privacy">Privacy Policy</a>
	</div>
</section>
