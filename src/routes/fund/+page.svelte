<script lang="ts">
	import ProductCard from '$lib/main/productCard.svelte';
	import Filters from './filters.svelte';
	import type { Product } from 'src/models/product.model';
	import type { PageData } from './$types';
	import Footer from '$lib/footer/footer.svelte';
	export let data: PageData;

	let products = data.items as Product[];
</script>

<Filters />
<div class="container mt-28">
	<div class="lg:columns-4 md:columns-3 sm:columns-1">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>
<footer class="border-t border-accent mt-16 sm:mt-24 lg:mt-40 py-6 sm:py-8 md:py-12">
	<Footer />
</footer>
