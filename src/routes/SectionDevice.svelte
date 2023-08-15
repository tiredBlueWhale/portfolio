<script>
	export let landscape = false;
</script>

<div
	class="flex flex-row items-center origin-top-left {landscape
		? '-rotate-90 translate-y-full'
		: ''}"
>
	<slot />
</div>
