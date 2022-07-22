<script>
	import Navbar from '$lib/navbar.svelte';
	import '../app.css';
</script>

<header>
	<Navbar />
</header>
<main class="min">
	<slot />
</main>
<footer class="w-full bottom-0 absolute flex items-center justify-center">
	<h3>Copywright 2022 Veseltoft</h3>
</footer>
