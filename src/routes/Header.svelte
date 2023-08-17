<script>
	import logo from '$lib/images/tired-blue-whale.png';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	/**
	 * @type {HTMLElement}
	 */
	let header;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const options = { threshold: [0.5] };
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (
						entry.intersectionRatio <= 0.5 &&
						(header.style.opacity === '0' || header.style.opacity === '')
					) {
						header.style.transition = 'opacity .6s ease-in';
						header.style.opacity = '1';
					}
				});
			}, options);
			const hero = document.querySelector('#hero');
			if (hero !== null) {
				observer.observe(hero);
			} else {
				header.style.opacity = '1';
			}

			return () => {
				if (hero !== null) {
					observer.unobserve(hero);
				}
			};
		}
	});
</script>

<header class="sticky top-0 left-0 opacity-0 z-[9999]" bind:this={header}>
	<div
		class="h-8 lg:h-16 py-1 lg:py-2 px-2 lg:px-4 absolute top-0 left-0 right-0 flex justify-between"
	>
		<a href="{base}/">
			<img
				class="h-full w-auto object-contain lg:pt-1 lg:pr-1 lg:pb-1 lg:pl-2"
				src={logo}
				alt="Home"
			/></a
		>
		<nav
			class="flex flex-col [&>:not(:first-child)]:border-t-2 lg:[&>:not(:first-child)]:opacity-0 lg:[&:hover>:not(:first-child)]:opacity-100"
		>
			<a class="text-base lg:text-xl no-underline p-2" href="{base}/">Home</a>
			<a
				class="text-base lg:text-xl no-underline p-2 border-white transition duration-300 ease-in-out"
				href="{base}/about">About</a
			>
		</nav>
	</div>
</header>
