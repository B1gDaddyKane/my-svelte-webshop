<script>
	import Navbar from '$lib/header/navbar.svelte';
	import '../app.css';
	import Landingpage from '$lib/header/landingPage.svelte';
</script>

<Navbar />
<header class="min-h-screen flex flex-col justify-evenly items-center relative">
	<Landingpage />
</header>
<main
	class="relative mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid 
	gap-16 sm:gap-24 lg:gap-40 overflow-hidden"
>
	<slot />
</main>
<!-- <footer class="w-full bottom-0 absolute flex items-center justify-center">
	<h3>Copywright 2022 Veseltoft</h3>
</footer> -->
