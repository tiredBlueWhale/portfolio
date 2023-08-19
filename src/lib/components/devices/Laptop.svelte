<script>
	export let src = 'https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png';
</script>

<div class="flex flex-col justify-center">
	<div class="self-center px-4">
		<div class="border-[12px] border-gray-800 bg-gray-800 rounded-t-xl">
			<div class="rounded-lg bg-gray-700">
				<img
					{src}
					class="rounded-lg w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] aspect-[16/9]"
					alt="Laptop"
				/>
			</div>
		</div>
	</div>
	<div
		class="flex justify-center items-start h-[10px] md:h-[12px] lg:h-[16px] xl:h-[20px] 2xl:h-[24px] bg-gray-700 rounded-b-xl rounded-t-sm"
	>
		<div class="w-[15%] h-1/2 rounded-b-xl bg-gray-800" />
	</div>
</div>
