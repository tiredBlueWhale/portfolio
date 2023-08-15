<script>
	import './styles.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Section from './Section.svelte';
</script>

<div class="relative flex flex-col min-h-screen">
	<Header />
	<main class="z-10">
		<slot />
	</main>
	<Section>
		<Footer />
	</Section>
</div>
