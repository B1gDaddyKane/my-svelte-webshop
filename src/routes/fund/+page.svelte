<script lang="ts">
	import ProductCard from '$lib/main/productCard.svelte';
	import type { Product } from 'src/models/product.model';
	import type { PageData } from './$types';
	export let data: PageData;

	let products = data.items as Product[];
</script>

<div class="container mt-16">
	<div class="mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>
