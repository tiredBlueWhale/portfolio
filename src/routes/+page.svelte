<script>
	import Hero from './Hero.svelte';
	import Section from './Section.svelte';
	import SectionContent from './SectionContent.svelte';
	import SectionText from './SectionText.svelte';

	import IPhone from './IPhone.svelte';
	import SectionDevice from './SectionDevice.svelte';
	import Android from './Android.svelte';
	import Laptop from './Laptop.svelte';
</script>

<svelte:head>
	<title>Tired Blue Whale</title>
	<meta name="description" content="Tired Blue Whale" />
</svelte:head>

<Section zIndex="z-[10]">
	<Hero />
</Section>
<Section zIndex="z-[9]">
	<SectionContent color="bg-orange-500">
		<SectionText
			slot="text"
			title="Stay Inside"
			subTitle="Fast passed hyper casual mobile game"
			description="The goal is to stay inside the outer circle, which changes speed, size and rythm."
		/>
		<SectionDevice slot="device">
			<div class="md:translate-y-4 lg:translate-y-16">
				<IPhone />
			</div>
			<div class="translate-x-2 md:-translate-x-8 -translate-y-4 lg:-translate-y-16 z-10">
				<Android />
			</div>
		</SectionDevice>
	</SectionContent>
</Section>
<Section zIndex="z-[8]">
	<SectionContent color="bg-red-600">
		<SectionText
			slot="text"
			title="Color & Shape"
			subTitle="Fast passed hyper casual mobile game"
			description="The goal is to press the correct color(s) and shape(s) made difficult by the Stroop effect"
		/>
		<SectionDevice slot="device" landscape>
			<div class="translate-x-4 lg:translate-x-4 translate-y-4 lg:translate-y-16 z-10">
				<Android />
			</div>
			<div class="-translate-y-4 lg:-translate-x-4">
				<IPhone />
			</div>
		</SectionDevice>
	</SectionContent>
</Section>
<Section zIndex="z-7]">
	<SectionContent color="bg-green-600">
		<SectionText slot="text" />
		<SectionDevice slot="device">
			<Laptop />
		</SectionDevice>
	</SectionContent>
</Section>
