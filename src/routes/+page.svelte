<script lang="ts">
	import Footer from '$lib/footer/footer.svelte';
	import Landingpage from '$lib/header/landingpage.svelte';
	import ImageSlider from '$lib/main/imageSlider.svelte';
	import NewsLetterForm from '$lib/main/newsLetterForm.svelte';
	import type { ProductList, Product } from 'src/models/product.model';

	export let data: ProductList;

	let products = data.items as Product[];
</script>

<header class="min-h-screen flex flex-col justify-evenly items-center relative preserve-3d -z-10">
	<Landingpage />
</header>
<main
	class="relative mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid 
	gap-16 sm:gap-24 lg:gap-40 overflow-hidden"
>
	<ImageSlider {products} />
	<NewsLetterForm />
</main>
<footer class="border-t border-accent mt-16 sm:mt-24 lg:mt-40 py-6 sm:py-8 md:py-12">
	<Footer />
</footer>
