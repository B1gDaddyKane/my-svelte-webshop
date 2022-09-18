<script lang="ts">
	import type { Product } from 'src/models/product.model';
	export let image: Product;
</script>

<div class="relative justify-between m-3">
	<img class="rounded-lg object-fill h-96 w-full" src={image.path} alt={image.name} />
	<div class="p-3 bg-white/60 absolute bottom-0 w-full rounded-b-lg">
		<a href="/fund">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-accent">{image.name}</h5>
		</a>
		<p class="mb-3 font-normal text-muted">{image.description}</p>
		<div class="flex justify-between items-center">
			<span class="text-lg font-bold text-muted">1950 kr.</span>
		</div>
	</div>
</div>
