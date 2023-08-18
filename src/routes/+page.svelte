<script>
	import { base } from '$app/paths';

	import { Hero, Download } from '$lib/components';
	import { Section, SectionContent, SectionDevice } from '$lib/components/sections';
	import { Android, IPhone, Laptop } from '$lib/components/devices';
</script>

<svelte:head>
	<title>Tired Blue Whale</title>
	<meta name="description" content="Tired Blue Whale" />
</svelte:head>

<Hero />
<Section sectionId="stay-inside" zIndex="z-[9]" color="bg-orange-500">
	<SectionContent>
		<div class="md:flex-1" />
		<span class="text-xs md:text-base lg:text-base">Game</span>
		<h1 class="text-4xl md:text-6xl lg:text-8xl font-martian font-bold">Stay Inside</h1>
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
			<a class="text-xs md:text-base lg:text-base" href="https://github.com/tiredBlueWhale"
				>GitHub
			</a>
			<a class="text-xs md:text-base lg:text-base" href="{base}/stay-inside/privacy"
				>Privacy Policy
			</a>
		</div>
		<SectionDevice slot="device">
			<div class="translate-x-2 md:translate-x-0 -translate-y-2 md:translate-y-4 lg:translate-y-8">
				<IPhone />
			</div>
			<div
				class="-translate-x-2 md:-translate-x-4 lg:-translate-x-8 translate-y-8 md:-translate-y-4 lg:-translate-y-8 z-10"
			>
				<Android />
			</div>
		</SectionDevice>
	</SectionContent>
</Section>
<Section sectionId="color-and-shape" zIndex="z-[8]" color="bg-red-600">
	<SectionContent fontFamily="">
		<div class="md:flex-1" />
		<span class="text-xs md:text-base lg:text-base">Game</span>
		<h1 class="text-xl md:text-4xl lg:text-6xl md:pb-1 font-open-dyslexic font-bold">
			Color & Shape
		</h1>
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
		<Download apple="http" android="asdjfkajfs" />
		<div class="flex-1 md:grow-[1.6]" />
		<div class="flex gap-4">
			<a class="text-xs md:text-base lg:text-base" href="https://github.com/tiredBlueWhale"
				>GitHub</a
			>
			<a class="text-xs md:text-base lg:text-base" href="{base}/color-and-shape/privacy"
				>Privacy Policy</a
			>
		</div>
		<SectionDevice slot="device" landscape>
			<div class="translate-x-2 md:translate-x-8 translate-y-4 md:translate-y-6 z-10">
				<Android />
			</div>
			<div class="-translate-x-4 md:translate-x-0 -translate-y-2 md:translate-y-0">
				<IPhone />
			</div>
		</SectionDevice>
	</SectionContent>
</Section>
<!-- <Section sectionId="maze" zIndex="z-[7]" color="bg-orange-500">
	<SectionContent color="bg-orange-500" fontFamily="font-mon">
		<span class="text-xs lg:text-base">Game</span>
		<h1 class="text-xl lg:text-6xl font-bold">Maze</h1>
		<h2 class="text-lg lg:text-3xl pb-1 lg:pb-4">Hyper casual mobile game</h2>
		<p class="text-base lg:text-xl pb-1 lg:pb-4">
			A maze with the players current position and the goal is shown from above. Afterwards the
			camera changes into the players first person view and the player has to reach the goal
		</p>
		<a class="text-base lg:text-xl pb-2 lg:pb-8" href="{base}{$paths['/maze']}">Learn More</a>
		<div class="grow-[.1]" />
		<Download apple="http" android="asdjfkajfs" />
		<div class="flex-1" />
		<div class="flex gap-4">
			<a class="text-xs lg:text-base" href="https://github.com/tiredBlueWhale">GitHub</a>
			<a class="text-xs lg:text-base" href="{base}/privacy">Privacy Policy</a>
		</div>
		<SectionDevice slot="device">
			<div class="translate-x-2 -translate-y-4 md:translate-y-4 lg:translate-y-16">
				<IPhone />
			</div>
			<div class="-translate-x-2 md:-translate-x-8 translate-y-4 lg:-translate-y-16 z-10">
				<Android />
			</div>
		</SectionDevice>
	</SectionContent>
</Section> -->
<Section sectionId="laptop" zIndex="z-[4]" color="bg-green-600">
	<SectionContent>
		<div class="p-4 md:flex-1" />
		<span class="text-xs lg:text-base">Placeholder</span>
		<h1 class="text-xl lg:text-6xl font-bold">Lorem ipsum dolor.</h1>
		<h2 class="text-lg lg:text-3xl pb-1 lg:pb-4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at.
		</h2>
		<p class="text-base lg:text-xl pb-1 lg:pb-4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien ac augue
			consequat, eu malesuada. .
		</p>
		<a class="text-base lg:text-xl pb-2 lg:pb-8" href="{base}/color-and-shape">Learn More</a>
		<div class="grow-[.1]" />
		<Download apple="http" android="asdjfkajfs" />
		<div class="flex-1 md:grow-[1.6]" />
		<div class="flex gap-4">
			<a class="text-xs lg:text-base" href="https://github.com/tiredBlueWhale">GitHub</a>
			<a class="text-xs lg:text-base" href="{base}/privacy/">Privacy Policy</a>
		</div>
		<SectionDevice slot="device">
			<Laptop />
		</SectionDevice>
	</SectionContent>
</Section>
