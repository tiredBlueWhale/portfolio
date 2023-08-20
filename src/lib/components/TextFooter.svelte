<script>
	import { base } from '$app/paths';

	/**
	 * @type {String}
	 */
	export let path;
</script>

<div class="flex gap-4">
	<slot />
	<a class="text-base lg:text-lg" href="https://github.com/tiredBlueWhale">GitHub </a>
	<a class="text-base lg:text-lg" href="{base}/{path}/privacy">Privacy Policy </a>
</div>
