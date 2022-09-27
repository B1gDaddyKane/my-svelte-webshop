<script lang="ts">
	import type { Product } from 'src/models/product.model';

	export let product: Product;
</script>

<div class="relative justify-between m-3">
	<a href="/fund/{product.id}">
		<img
			class="rounded-lg object-fill h-96 w-full"
			src={'http://127.0.0.1:8090/api/files/products/' + product.id + '/' + product.images[0]}
			alt={product.name}
		/>
		<div class="p-3 bg-white/60 absolute bottom-0 w-full rounded-b-lg">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-accent">{product.name}</h5>
			<div class="flex justify-between items-center">
				<span class="text-lg font-bold text-muted">{product.price} kr.</span>
			</div>
		</div>
	</a>
</div>
