<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { talents } = data;

	const getRole = (role: number) => {
		switch (role) {
			case 0:
				return 'Frontend Engineer';
			case 1:
				return 'Backend Engineer';
			case 2:
				return 'Fullstack Engineer';
			case 3:
				return 'Architect';
			default:
				return 'Unknown';
		}
	};
</script>

<svelte:head>
	<title>Talents - Trigyte</title>
</svelte:head>

<section class="max-w-7xl mx-auto my-32">
	<div class="grid sm:grid-cols-3 sm:gap-4">
		{#each talents as talent}
			<div class="flex flex-col p-4 bg-gray-300 shadow-md rounded-lg">
				<h2>{talent.name}</h2>
				<a href="mailto:{talent.email}" class="font-medium hover:underline">{talent.email}</a>
                <p class="font-bold">{getRole(talent.role)}</p>
			</div>
		{/each}
	</div>
</section>
