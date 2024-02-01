<script>
	import stayInsideiOS from '$lib/images/stay-inside-iOS.png';
	import stayInsideAnroid from '$lib/images/stay-inside-android.png';
	import colorAndShapeiOS from '$lib/images/color-shape-iOS.png';
	import colorAndShapeAndroid from '$lib/images/color-shape-android.png';
	import tobi2goiOS from '$lib/images/tobi-2-go-iOS.png';
	import tobi2goAndroid from '$lib/images/tobi-2-go-android.png';

	import { base } from '$app/paths';

	import { Hero, Download } from '$lib/components';
	import { Section, SectionContent } from '$lib/components/sections';
	import { Android, IPhone, Laptop } from '$lib/components/devices';
</script>

<svelte:head>
	<title>Tired Blue Whale</title>
	<meta name="description" content="Tired Blue Whale" />
</svelte:head>

<Hero />
<Section sectionId="stay-inside" zIndex="z-[9]" color="bg-stay-inside">
	<SectionContent fontFamily="font-martian">
		<div class="md:flex-1" />
		<span class="text-xs md:text-base lg:text-base">Game</span>
		<h1 class="text-4xl md:text-6xl lg:text-8xl font-bold text-shadow shadow-stay-inside-shadow">
			Stay Inside
		</h1>
		<h2 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">
			Fast passed hyper casual mobile game
		</h2>
		<p class="text-base md:text-lg lg:text-xl pb-1 lg:pb-4">
			The goal is to stay inside the outer circle, which changes speed, size and rythm.
		</p>
		<a class="text-base md:text-lg lg:text-xl pb-2 lg:pb-8" href="{base}/stay-inside">Learn More</a>
		<div class="grow-[.1]" />
		<Download apple="http" android="asdjfkajfs" />
		<div class="flex-1 md:grow-[1.6]" />
		<div class="flex gap-4">
			<a class="text-sm lg:text-base" href="https://www.iubenda.com/privacy-policy/75552625"
				>Privacy Policy
			</a>
		</div>
		<div slot="device" class="relative flex flex-row">
			<div class="translate-x-2 md:translate-x-0 -translate-y-2 md:translate-y-4 lg:translate-y-8">
				<IPhone src={stayInsideiOS} />
			</div>
			<div
				class="-translate-x-2 md:-translate-x-4 lg:-translate-x-8 translate-y-2 md:-translate-y-4 lg:-translate-y-8 z-10"
			>
				<Android src={stayInsideAnroid} />
			</div>
		</div>
	</SectionContent>
</Section>
<Section sectionId="color-and-shape" zIndex="z-[8]" color="bg-color-and-shape">
	<SectionContent fontFamily="font-audiowide">
		<div class="md:flex-1" />
		<span class="text-xs md:text-base lg:text-base">Game</span>
		<h1 class="text-3xl md:text-5xl lg:text-7xl md:pb-1 font-bold">Color & Shape</h1>
		<h2 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">
			Fast passed hyper casual mobile game
		</h2>
		<p class="text-base md:text-lg lg:text-xl pb-1 lg:pb-4">
			The goal is to press the correct color(s) and shape(s) made difficult by the <a
				href="https://en.wikipedia.org/wiki/Stroop_effect"
			>
				Stroop effect
			</a> .
		</p>
		<a class="text-base md:text-lg lg:text-xl pb-2 lg:pb-8" href="{base}/color-and-shape"
			>Learn More
		</a>
		<div class="grow-[.1]" />
		<h3 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">March 2024</h3>
		<!-- <Download apple="http" android="asdjfkajfs" /> -->
		<div class="flex-1 md:grow-[1.6]" />
		<div class="flex gap-4">
			<a class="text-sm lg:text-base" href="{base}/color-and-shape/privacy">Privacy Policy </a>
		</div>
		<div slot="device" class="relative flex flex-col">
			<div class="translate-x-2 md:translate-x-8 translate-y-4 md:translate-y-6 z-10">
				<Android src={colorAndShapeAndroid} landscape />
			</div>
			<div class="-translate-x-4 md:translate-x-0 -translate-y-2 md:translate-y-0">
				<IPhone src={colorAndShapeiOS} landscape />
			</div>
		</div>
	</SectionContent>
</Section>
<Section sectionId="color-and-shape" zIndex="z-[7]" color="bg-lime-700">
	<SectionContent fontFamily="font-press-start-2p">
		<div class="md:flex-1" />
		<span class="text-xs md:text-base lg:text-base md:pb-1">Utility</span>
		<h1 class="text-3xl md:text-5xl lg:text-7xl md:pb-2">Tobi2Go</h1>
		<h2 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">Feel good app</h2>
		<p class="text-sm md:text-base lg:text-lg pb-1 lg:pb-4">
			You are feeling down, need a bit of motivation or just feel like all you need is someone with
			a good attitude. <br /> Then Tobi2Go is the app for you, just press one of the many buttons to
			get you daily dose of encouragement.
		</p>
		<a class="text-sm md:text-base lg:text-lg pb-2 lg:pb-8" href="{base}/tobi-2-go">Learn More </a>
		<div class="grow-[.1]" />
		<h3 class="text-lg md:text-xl lg:text-3xl pb-1 lg:pb-4">February 2024</h3>
		<!-- <Download apple="http" android="asdjfkajfs" /> -->
		<div class="flex-1 md:grow-[1.6]" />
		<div class="flex gap-4">
			<a class="text-sm lg:text-base" href="{base}/tobi-2-go/privacy">Privacy Policy </a>
		</div>
		<div slot="device" class="relative flex flex-row">
			<div class="translate-x-2 md:translate-x-0 -translate-y-2 md:translate-y-4 lg:translate-y-8">
				<Android src={tobi2goAndroid} />
			</div>
			<div
				class="-translate-x-2 md:-translate-x-4 lg:-translate-x-8 translate-y-2 md:-translate-y-4 lg:-translate-y-8 z-10"
			>
				<IPhone src={tobi2goiOS} />
			</div>
		</div>
	</SectionContent>
</Section>
