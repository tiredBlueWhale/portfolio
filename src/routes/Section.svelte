<script>
	import { onMount } from 'svelte';

	export let zIndex = '-z-10';
	/**
	 * @type {number}
	 */
	let outerHeight;

	/**
	 * @type {number}
	 */
	let scrollY;

	/**
	 * @type {HTMLElement}
	 */
	let section;

	/**
	 * @type {HTMLElement}
	 */
	let sectionPlaceholder;

	$: {
		if (section !== undefined && sectionPlaceholder !== null) {
			const height = outerHeight + sectionPlaceholder.offsetTop - scrollY;
			section.style.height = (height > 0 ? height : 0) + 'px';
		}
	}
</script>

<svelte:window bind:outerHeight bind:scrollY />

<section
	class="fixed top-0 right-0 left-0 overflow-clip {zIndex}"
	bind:this={section}
	style="height: 100vh;"
>
	<div class="absolute top-0 right-0 left-0 h-screen">
		<slot />
	</div>
</section>

<div class="h-[110vh]" bind:this={sectionPlaceholder} />
