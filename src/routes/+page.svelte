<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	export let form: ActionData;
</script>

<svelte:head>
	<title>Trigyte</title>
</svelte:head>

<section class="max-w-7xl mx-auto my-32">
	<form use:enhance>
		<input type="text" name="name" placeholder="Name" aria-label="Name" />
		<select name="role" aria-label="Role">
			<option value="0">Frontend Engineer</option>
			<option value="1">Backend Engineer</option>
			<option value="2">Fullstack Engineer</option>
			<option value="3">Architect</option>
		</select>

		<input type="email" name="email" placeholder="Email" />

		<button type="submit">Submit</button>

		{#if form?.error}
			<ul class="notice-error">
				{#each form.errors as error}
					<li>{error.message}</li>
				{/each}
			</ul>
		{/if}
	</form>
</section>

<style>
	form {
		@apply flex flex-col p-12 w-6/12 bg-alice-blue space-y-2;
	}

	form input,
	form select {
		@apply p-2 border border-gray-300 rounded;
	}

	form button[type='submit'] {
		@apply text-white font-bold w-fit p-2 bg-indigo-600 cursor-pointer;
	}

	.notice-error {
		@apply list-none space-y-3;
	}

	.notice-error li {
		@apply p-4 bg-mauvelous;
	}
</style>
