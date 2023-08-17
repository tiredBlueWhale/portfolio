<script>
	export let landscape = false;
</script>

<div
	class="relative flex flex-row origin-top-left {landscape ? '-rotate-90 translate-y-full' : ''}"
>
	<slot />
</div>
