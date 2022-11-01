<script lang="ts">
	import type { Product } from 'src/models/product.model';

	export let product: Product;
</script>

<div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4">
	<a href="/fund/{product.id}">
		<img
			class="object-cover h-full [@media(hover:hover)]: peer cursor-pointer"
			src={'http://127.0.0.1:8090/api/files/products/' + product.id + '/' + product.images[0]}
			alt={product.name}
			on:dragstart={() => false}
		/>
		<p
			class="absolute bottom-4 left-4 px-4 py-4 bg-bkg font-bold text-md pointer-events-none tracking-wide 
						[@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity"
		>
			{product.name}
		</p>
	</a>
</div>
