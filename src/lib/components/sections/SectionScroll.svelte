<script>
	/**
	 * @type {String}
	 */
	export let title;

	export let color = 'bg-blue-700';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
</svelte:head>

<section class="min-h-screen flex justify-center p-8 lg:py-16 lg:px-32 {color}">
	<div class="max-w-screen-xl flex-1 flex flex-col">
		<slot />
	</div>
</section>
