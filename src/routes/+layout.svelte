<script lang="ts">
	import '../app.css';
</script>

<nav class="max-w-7xl mx-auto py-8 flex gap-4">
	<a href="/">Home</a>
	<a href="/talents">Talents</a>
</nav>

<slot />

<style>
	nav a {
		@apply font-bold cursor-pointer hover:text-indigo-600;
	}
</style>