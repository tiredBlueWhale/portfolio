<script>
	import './styles.css';
	import { onMount } from 'svelte';
	import { Header, Footer } from '$lib/components';
	import { update } from '$lib/hydrated.js';
	import { onNavigate } from '$app/navigation';

	onMount(update);
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="relative flex flex-col min-h-screen">
	<Header />
	<main class="z-20">
		<slot />
	</main>
	<Footer />
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-down {
		from {
			transform: translateY(100px);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		:root::view-transition-old(root) {
			animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out;
		}

		:root::view-transition-new(root) {
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-down;
		}
	}
</style>
