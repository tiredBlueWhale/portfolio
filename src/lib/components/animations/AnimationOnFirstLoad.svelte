<script>
	import { afterNavigate } from '$app/navigation';

	afterNavigate(({ from }) => {
		console.log(from);
		if (from === null) {
			_animation = animation;
		}
	});

	export let style = '';
	export let animation = '';
	let _animation = '';
</script>

<div class="{style} {_animation}">
	<slot />
</div>
