<script>
	import stayInside from '$lib/images/stay-inside.png';

	export let src = stayInside;
	export let landscape = false;
</script>

<div
	class="relative border-[7px] md:border-[9px] lg:border-[14px] rounded-[1.25rem] lg:rounded-[2.5rem] border-gray-800 bg-gray-800"
>
	<!-- Island Top -->
	<div
		class="absolute rounded-[2rem] bg-gray-800 {landscape
			? 'h-[24%] w-[4%] left-[1.5%] top-1/2 -translate-y-1/2'
			: 'h-[4%] w-[24%] top-[1.5%] left-1/2 -translate-x-1/2'}"
	/>
	<!-- Silent switch -->
	<div
		class="absolute rounded-l-lg bg-gray-800 {landscape
			? 'h-[2%] w-[6%] -bottom-[6%] left-[18%]'
			: 'h-[6%] w-[2%] -left-[6%] top-[18%]'}"
	/>
	<!-- Volume up -->
	<div
		class="absolute rounded-l-lg bg-gray-800 {landscape
			? 'h-[2%] w-[7.5%] -bottom-[6%] left-[28%]'
			: 'h-[7.5%] w-[2%] -left-[6%] top-[28%]'}"
	/>
	<!-- Volume up -->
	<div
		class="absolute rounded-l-lg bg-gray-800 {landscape
			? 'h-[2%] w-[7.5%] -bottom-[6%] left-[36%]'
			: 'h-[7.5%] w-[2%] -left-[6%] top-[36%]'}"
	/>
	<!-- Unlock button -->
	<div
		class="absolute rounded-r-lg bg-gray-800 {landscape
			? 'h-[2%] w-[10.5%] -top-[6%] left-[30%]'
			: 'h-[10.5%] w-[2%] -right-[6%] top-[34%]'}"
	/>
	<div class="rounded-[1rem] lg:rounded-[2rem] overflow-hidden w-full h-full bg-white">
		<img
			{src}
			class="object-cover {landscape
				? 'aspect-[19/9] w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px]'
				: 'aspect-[9/19] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px]'} "
			alt="iPhone"
		/>
	</div>
</div>
