<script>
	import stayInside from '$lib/images/stay-inside.png';

	export let src = stayInside;
</script>

<div
	class="relative border-[7px] md:border-[9px] lg:border-[14px] rounded-[1.25rem] lg:rounded-[2.5rem] border-gray-800 bg-gray-800"
>
	<div
		class="absolute h-[4%] w-[24%] top-[1.5%] rounded-[2rem] left-1/2 -translate-x-1/2 bg-gray-800"
	/>
	<div class="absolute h-[7.5%] w-[1%] -left-[6%] top-[20%] rounded-l-lg bg-gray-800" />
	<div class="absolute h-[7.5%] w-[1%] -left-[6%] top-[30%] rounded-l-lg bg-gray-800" />
	<div class="absolute h-[10.5%] w-[1%] -right-[6%] top-[23%] rounded-r-lg bg-gray-800" />
	<div class="rounded-[1rem] lg:rounded-[2rem] overflow-hidden w-full h-full bg-white">
		<img
			{src}
			class="aspect-[1/2] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px] object-cover"
			alt="iPhone"
		/>
	</div>
</div>
