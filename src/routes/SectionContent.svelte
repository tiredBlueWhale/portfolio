<script>
	export let color = 'black';
	export let colorText = 'black';
</script>

<div class="h-full flex justify-center pt-8 pb-8 lg:py-16 px-8 lg:px-32 {color}">
	<div class="max-w-[1200px] flex-1 flex flex-col-reverse lg:flex-row lg:gap-8">
		<div class="flex-1 lg:min-w-[400px] flex {colorText}">
			<slot name="text" />
		</div>
		<div class="p-1 lg:p-2" />
		<div
			class="flex-1 lg:flex-1 flex justify-center lg:justify-start items-end lg:items-center relative"
		>
			<slot name="device" />
		</div>
	</div>
</div>
