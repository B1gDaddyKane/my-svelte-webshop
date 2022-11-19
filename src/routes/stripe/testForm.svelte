<script lang="ts">
	import type { ActionData } from './$types';
	import { getContext } from 'svelte';
	import type { stripeContext } from 'src/models/product.model';

	export let form: ActionData;

	const { getStripe } = getContext<stripeContext>('stripe');
	const stripe = getStripe();

	if (form?.body) {
		const { sessionId } = JSON.parse(form.body);
		stripe?.redirectToCheckout({
			sessionId
		});
	}
</script>

<div class="flex items-center justify-center mt-20">
	<form method="POST">
		<input
			label="priceId"
			type="text"
			name="priceId"
			hidden
			value="price_1M5rd8J2vhuewOTmV6Ar0w64"
		/>
		<button type="submit">Test køb</button>
	</form>
</div>
