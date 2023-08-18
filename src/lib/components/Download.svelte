<script>
	import appleBadge from '$lib/images/apple-badge.svg';
	import googleBadge from '$lib/images/google-play-badge.png';

	export let apple = '';
	export let android = '';
</script>

<div class="flex flex-wrap gap-2 lg:gap-4">
	{#each [{ src: appleBadge, href: apple, alt: 'Download on the App Store' }, { src: googleBadge, href: android, alt: 'Get it on Google Play' }] as { src, href, alt }}
		{#if href !== ''}
			<a {href}><img class="h-11 lg:h-16 object-contain" {alt} {src} /></a>
		{/if}
	{/each}
</div>
