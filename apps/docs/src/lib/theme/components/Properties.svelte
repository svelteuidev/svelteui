<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */
	/* (!) Restart bandler if this file was edited
	 *
	 *   Properties data structure:
	 *   data = [
	 *       {
	 *           name <string>,
	 *           description <string>,
	 *           attr[
	 *               default<string>,
	 *               types: <string> | [ <string> ]
	 *           ]
	 *       },
	 *       ...
	 *   ]
	 */
	export let data: any[];

	function getTypes(types: any) {
		if (!types) return '';

		const typeValue = (type: any) => {
			if (!type) return '';
			if (typeof type === 'string') return type;

			return type.map((v: any) => `<span>${v}</span>`).join(',');
		};

		return types.map((type: any) => `<span class="typedef">${typeValue(type)}</span>`).join('');
	}
</script>

<table class="properties">
	{#each data as prop}
		<tr>
			<td>
				<div class="propname" class:required={!prop.attr.default}>{prop.name}</div>
				<div class="default">{prop.attr.default ? prop.attr.default : ''}</div>
			</td>
			<td>
				<div class="types">{@html getTypes(prop.attr.types)}</div>
			</td>
			<td>
				<div class="description">{@html prop.description ? prop.description : ''}</div>
			</td>
		</tr>
	{/each}
</table>
