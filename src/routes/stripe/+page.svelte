<script lang="ts">
	import type { ActionData } from './$types';
	import StripeProvider from './stripeProvider.svelte';
	import TestForm from './testForm.svelte';

	export let form: ActionData;
</script>

<StripeProvider>
	<TestForm {form} />
</StripeProvider>
