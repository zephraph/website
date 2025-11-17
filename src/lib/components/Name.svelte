<script lang="ts">
	import { bannerVisible } from '$lib/stores/banner';
</script>

<div
	class="fixed top-0 left-1/2 -translate-x-1/2 z-20 flex items-center"
	class:opacity-0={$bannerVisible}
	class:pointer-events-none={$bannerVisible}
	style="height: 1lh;"
>
	<span class="text-fg-0 font-normal">
		<span class="font-bold">just</span><span class="font-normal text-fg-1">in</span>
		<span class="font-bold">be</span><span class="font-normal text-fg-1">nnett</span>
	</span>
</div>
