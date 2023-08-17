<script>
	export let zIndex = 'z-0';
	export let color = 'bg-neutral-800';
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
	<div class="absolute top-0 right-0 left-0 h-screen-large">
		<slot />
	</div>
</section>

<div class="h-section-placeholder {color}" bind:this={sectionPlaceholder} />
