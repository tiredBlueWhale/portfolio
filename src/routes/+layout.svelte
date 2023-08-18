<script>
	import './styles.css';
	import { Header, Footer } from '$lib/components';
</script>

<div class="relative flex flex-col min-h-screen">
	<Header />
	<main class="z-20">
		<slot />
	</main>
	<Footer />
</div>
