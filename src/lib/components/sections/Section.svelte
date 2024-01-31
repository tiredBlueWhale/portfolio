<script>
	export let sectionId = '';
	export let zIndex = 'z-0';
	export let color = 'bg-hero';

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
		if (section !== undefined && sectionPlaceholder !== undefined) {
			const _height = sectionPlaceholder.clientHeight + sectionPlaceholder.offsetTop - scrollY;
			section.style.height = (_height > 0 ? _height : 0) + 'px';
		}
	}
</script>

<svelte:window bind:scrollY />

<section
	class="fixed top-0 right-0 left-0 overflow-clip {zIndex}"
	style="height: 100vh;"
	bind:this={section}
>
	<div
		class="absolute top-0 right-0 left-0 h-screen transition-[height] duration-75 ease-linear {color}"
	>
		<slot />
	</div>
</section>

<div id={sectionId} class="h-section-placeholder {color}" bind:this={sectionPlaceholder} />
