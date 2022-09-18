<script lang="ts">
	import ProductCard from '$lib/main/productCard.svelte';
	let images: import('src/models/product.model').Product[] = [
		{ name: 'vitrineskab', description: 'bla bla bla', path: 'images/IMG_1623.jpg', price: 1950 },
		{ name: 'vitrineskab', description: 'bla bla bla', path: 'images/IMG_1632.jpg', price: 1950 },
		{ name: 'vitrineskab', description: 'bla bla bla', path: 'images/IMG_1636.jpg', price: 1950 },
		{ name: 'kommode', description: 'bla bla bla', path: 'images/IMG_1660.jpg', price: 1950 }
	];
</script>

<div class="container mt-16">
	<div class="mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
		{#each images as image}
			<ProductCard {image} />
		{/each}
	</div>
</div>
