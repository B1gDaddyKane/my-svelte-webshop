<script lang="ts">
	import { loadStripe } from '@stripe/stripe-js';
	import type { Stripe } from '@stripe/stripe-js';
	import { onMount, setContext } from 'svelte';
	import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from '$env/static/public';
	import type { stripeContext } from 'src/models/product.model';

	if (typeof PUBLIC_STRIPE_PUBLISHABLE_KEY !== 'string') {
		throw new Error('VITE_STRIPE_PUBLIC_KEY must be added to .env');
	}

	let stripe: Stripe | null;

	setContext<stripeContext>('stripe', {
		getStripe: () => stripe
	});

	onMount(async () => {
		console.log('StripeProvider onload');
		stripe = await loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);
	});
</script>

{#if stripe}
	<slot />
{/if}
