<script>
	import stayInside from '$lib/images/stay-inside.png';

	export let src = stayInside;
</script>

<div
	class="relative border-[7px] md:border-[9px] lg:border-[14px] rounded-[.37rem] lg:rounded-[.75rem] border-gray-800 bg-gray-800"
>
	<div
		class="absolute h-[3%] w-[52%] bg-gray-800 top-0 rounded-b-[.5rem] lg:rounded-b-[1rem] left-1/2 -translate-x-1/2"
	/>

	<div class="absolute h-[7.5%] w-[1%] -left-[6%] top-[10%] rounded-l-lg bg-gray-800" />
	<div class="absolute h-[7.5%] w-[1%] -left-[6%] top-[20%] rounded-l-lg bg-gray-800" />
	<div class="absolute h-[7.5%] w-[1%] -left-[6%] top-[30%] rounded-l-lg bg-gray-800" />
	<div class="absolute h-[10.5%] w-[1%] -right-[6%] top-[23%] rounded-r-lg bg-gray-800" />

	<div class="rounded-[.37rem] lg:rounded-[.75rem] bg-white">
		<img
			{src}
			class="aspect-[1/2] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px]"
			alt="Android"
		/>
	</div>
</div>
