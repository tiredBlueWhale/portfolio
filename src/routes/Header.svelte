<script>
	import logo from '$lib/images/tired-blue-whale.png';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { paths } from '$lib/stores';

	let isOpen = false;
	function onLinkClick() {
		isOpen = false;
	}
	function onButtonClick() {
		isOpen = !isOpen;
	}
	/**
	 * @param {string} pathname
	 */
	function getPathname(pathname) {
		const pathSplit = pathname.split('/');
		return '/' + pathSplit[1];
	}
</script>

<!-- <svelte:window bind:innerWidth /> -->

<header class="sticky top-0 left-0 right-0 z-[9999] animate-[fade-in_4s_ease-in-out]">
	<div class="absolute top-0 right-0 left-0 flex justify-center">
		<div
			class="flex-1 h-screen xl:h-0 2xl:max-w-[1800px] {isOpen
				? 'flex'
				: 'hidden'} xl:flex flex-row justify-center xl:justify-between items-stretch xl:items-start bg-neutral-600 xl:bg-transparent"
		>
			<div class="xl:p-10">
				<a href="{base}/">
					<img class="hidden xl:block h-8 xl:h-16 w-8 xl:w-16" src={logo} alt="Home" /></a
				>
			</div>
			<nav class="flex flex-col justify-center group xl:p-8">
				{#each Object.entries($paths) as [path, { title }]}
					<a
						class="text-3xl md:text-6xl xl:text-2xl no-underline p-2 md:p-4 text-center xl:text-right text-neutral-200 hover:text-neutral-50
						{getPathname($page.url.pathname) === path
							? 'order-first'
							: 'border-t-2 border-neutral-200 xl:opacity-0 group-hover:opacity-100 transition-[opacity] duration-150 ease-in'}"
						href="{base}{path}"
						on:click={onLinkClick}
						>{title}
					</a>
				{/each}
			</nav>
		</div>
	</div>
	<button class="absolute top-4 right-4 xl:hidden" on:click={onButtonClick}>
		{#if isOpen}
			<svg
				class="w-6 h-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
				/>
			</svg>
		{:else}
			<svg
				class="w-6 h-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		{/if}
	</button>
</header>
