<script lang="ts">
	export let width: 'sm' | 'md' | 'lg' = 'sm';

	let maxW;
	switch (width) {
		case 'sm':
			maxW = 'max-w-sm';
			break;
		case 'md':
			maxW = 'max-w-xl';
			break;
		case 'lg':
			maxW = 'max-w-4xl';
			break;

		default:
			'max-w-sm';
	}
</script>

<div class="border border-blue-300 shadow rounded-md p-4 w-full mx-auto {maxW}">
	<div class="animate-pulse flex space-x-4">
		<div class="rounded-full bg-slate-700 h-10 w-10" />
		<div class="flex-1 space-y-6 py-1">
			<div class="h-2 bg-slate-700 rounded" />
			<div class="space-y-3">
				<div class="grid grid-cols-3 gap-4">
					<div class="h-2 bg-slate-700 rounded col-span-2" />
					<div class="h-2 bg-slate-700 rounded col-span-1" />
				</div>
				<div class="h-2 bg-slate-700 rounded" />
			</div>
			<div class="h-2 bg-slate-700 rounded" />
			<div class="space-y-3">
				<div class="grid grid-cols-3 gap-4">
					<div class="h-2 bg-slate-700 rounded col-span-2" />
					<div class="h-2 bg-slate-700 rounded col-span-1" />
				</div>
				<div class="h-2 bg-slate-700 rounded" />
			</div>
		</div>
	</div>
</div>
