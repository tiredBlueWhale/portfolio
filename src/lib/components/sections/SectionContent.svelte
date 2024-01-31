<script>
	export let fontFamily = '';
</script>

<div class="h-full flex justify-center py-4 px-6 md:py-32 md:px-16 xl:px-52">
	<div class="flex-1 flex flex-col-reverse md:flex-row max-w-screen-2xl">
		<slot name="top" />
		<div class="flex-1 flex flex-col {fontFamily}">
			<slot />
		</div>
		<div class="md:p-2 lg:p-8" />
		<div
			class="flex-1 md:grow-[1.2] lg:grow-[1.0] xl:grow-[1.6] flex flex-row justify-center md:justify-start items-end md:items-center"
		>
			<slot name="device" />
		</div>
		<slot name="bottom" />
	</div>
</div>
