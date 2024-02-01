<script>
	import stayInside from '$lib/images/stay-inside.png';

	export let src = stayInside;
	export let landscape = false;
</script>

<div
	class="relative border-[7px] md:border-[9px] lg:border-[14px] rounded-[1rem] lg:rounded-[2rem] border-gray-800 bg-gray-800"
>
	<!-- Camera Top -->
	<div
		class="absolute aspect-square rounded-[2rem] bg-gray-800 {landscape
			? 'w-[3%] left-[1.5%] top-1/2 -translate-y-1/2'
			: 'h-[3%] top-[1.5%] left-1/2 -translate-x-1/2'} "
	/>

	<!-- Unlock button -->
	<div
		class="absolute rounded-r-lg bg-gray-800 {landscape
			? 'h-[2%] w-[8.5%] -top-[6%] left-[25%]'
			: 'h-[8.5%] w-[2%] -right-[6%] top-[25%]'}"
	/>
	<!-- Volume button -->
	<div
		class="absolute rounded-r-lg bg-gray-800 {landscape
			? 'h-[2%] w-[16%] -top-[6%] left-[36%]'
			: 'h-[16%] w-[2%] -right-[6%] top-[36%]'}"
	/>

	<div class="rounded-[0.75rem] lg:rounded-[1.5rem] overflow-hidden w-full h-full bg-white">
		<img
			{src}
			class="object-cover {landscape
				? 'aspect-[19/9] w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px]'
				: 'aspect-[9/19] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px]'} "
			alt="Android"
		/>
	</div>
</div>
