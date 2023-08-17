<script>
	export let src = 'https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png';
</script>

<div class="flex flex-col justify-center max-w-full aspect-[2/1]">
	<div class="h-[94%] self-center aspect-[16/9]">
		<div
			class="h-full w-full border-[12px] border-gray-800 dark:border-gray-800 bg-gray-800 rounded-t-xl"
		>
			<div class="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-700">
				<img {src} class="rounded-lg w-full h-auto object-cover object-center" alt="Laptop" />
			</div>
		</div>
	</div>
	<div
		class="flex justify-center items-start h-[6%] border-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm"
	>
		<div class="w-[15%] h-1/2 rounded-b-xl bg-gray-800" />
	</div>
</div>
