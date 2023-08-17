<script>
	import './styles.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="relative flex flex-col min-h-screen">
	<Header />
	<main class="z-20">
		<slot />
	</main>
	<Footer />
</div>
