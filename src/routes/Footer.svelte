<script>
	import github from '$lib/images/github-mark-white.svg';
	import envelope from '$lib/images/envelope-regular.svg';

	import Section from './Section.svelte';

	const year = new Date().getFullYear();
</script>

<Section sectionId="footer" color="bg-neutral-800">
	<footer class="h-full p-8 flex flex-col justify-center items-center gap-6">
		<div class="flex gap-4">
			<a href="https://github.com/tiredBlueWhale">
				<img class="w-16 h-16 object-container" src={github} alt="GitHub" /></a
			>
			<a href="mailto: tired.blue.whale@gmail.com">
				<img class="w-16 h-16 object-container" src={envelope} alt="Mail" /></a
			>
		</div>
		<span class="text-white">Copyright @ {year} Tired Blue Whale. All rights reserved</span>
	</footer>
</Section>
