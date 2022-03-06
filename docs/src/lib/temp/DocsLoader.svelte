<script lang="ts">
	import SkeletonLoader from '$lib/temp/SkeletonLoader.svelte';
</script>

<div class="flex flex-col space-y-10 md:space-y-20">
	<SkeletonLoader width="lg" />
	<div class="md:flex gap-5">
		<SkeletonLoader />
		<SkeletonLoader class="hidden md:block" />
	</div>
</div>
