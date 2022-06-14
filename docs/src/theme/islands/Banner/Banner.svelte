<script lang="ts">
	import useStyles from './Banner.styles';

	export let message = 'Banner Message';
</script>

<div class="z-50 container mx-auto py-2 flex items-center justify-between">
	<div class="text-dark-700 absolute top-2 left-2/12 font-bold flex items-center">
		{message}
	</div>
</div>
