<script>
	import './styles.css';
	import { Header, Footer } from '$lib/components';

	import { onMount } from 'svelte';
	import { update } from '$lib/hydrated.js';

	onMount(update);
</script>

<div class="relative flex flex-col min-h-screen">
	<Header />
	<main class="z-20">
		<slot />
	</main>
	<Footer />
</div>
