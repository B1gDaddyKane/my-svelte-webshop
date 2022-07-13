<script>
	import Navbar from '$lib/navbar.svelte';
	import '../styles/base.css';
</script>

<header class="center">
	<Navbar />
</header>
<main>
	<slot />
</main>
<footer class="center"><h3>Copywright 2022 Veseltoft</h3></footer>

<style>
	header {
		background: lavender;
	}
</style>
