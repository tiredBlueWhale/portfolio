<script>
	import { onMount } from 'svelte';

	export let zIndex = '-z-10';
	/**
	 * @type {number}
	 */
	let innerHeight;

	/**
	 * @type {number}
	 */
	// let scrollY;

	/**
	 * @type {HTMLElement}
	 */
	let section;

	/**
	 * @type {HTMLElement}
	 */
	let sectionPlaceholder;

	// $: {
	// 	if (section !== undefined && sectionPlaceholder !== null) {
	// 		const height = innerHeight + sectionPlaceholder.offsetTop - scrollY;
	// 		section.style.height = (height > 0 ? height : 0) + 'px';
	// 	}
	// }
	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const threshold = Array.from({ length: 101 }, (_, i) => i / 100);
			console.log(threshold);
			const options = { threshold };
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					console.log(entry.intersectionRatio);
					const height = `${innerHeight * entry.intersectionRatio}px`;
					console.log(height);
					section.style.height = height;
					console.log(section.style.height);
				});
			}, options);
			observer.observe(sectionPlaceholder);

			return () => observer.unobserve(sectionPlaceholder);
		}
	});
</script>

<!-- <svelte:window bind:innerHeight bind:scrollY /> -->
<svelte:window bind:innerHeight />

<section
	class="fixed top-0 right-0 left-0 overflow-clip {zIndex}"
	bind:this={section}
	style="height: 100vh;"
>
	<div class="absolute top-0 right-0 left-0 h-screen">
		<slot />
	</div>
</section>

<div class="h-[100vh]" bind:this={sectionPlaceholder} />
