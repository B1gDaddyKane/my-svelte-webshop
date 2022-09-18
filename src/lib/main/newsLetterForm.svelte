<script lang="ts">
	import { onMount } from 'svelte';

	let disabled: boolean = false;
	let email: string = '';
	let hidden: boolean = false;
	const btnMessageOptions = {
		signup: `
            <span>Tilmeld</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 256 256"
				class="pointer-events-none"
				><rect width="256" height="256" fill="none" /><path
					d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="16"
				/><line
					x1="110.9"
					y1="145.1"
					x2="156.1"
					y2="99.9"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="24"
				/>
                </svg>
        `,
		loading: `
        <svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
        class="animate-spin"
		fill="currentColor"
		viewBox="0 0 256 256"
		><rect width="256" height="256" fill="none" /><path
			d="M168,40.7a96,96,0,1,1-80,0"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
        </svg>
        <span class="animate-pulse tracking wide">Sender...</span>
        `,
		success: `
        <span class="tracking wide">Mange tak</span>
        <span class="tracking wide">💕</span>

        `
	};
	let btnMessage = btnMessageOptions.signup;

	const signupLetter = async (event: SubmitEvent) => {
		event.preventDefault();
		disabled = true;
		hidden = true;
		btnMessage = btnMessageOptions.loading;
		await new Promise((resolve) => setTimeout(resolve, 2000));
		btnMessage = btnMessageOptions.success;
	};
</script>

<section aria-labelledby="newsletter" class="container grid gap-4 text-center max-w-prose">
	<div>
		<small class="tracking-widest text-accent uppercase drop-shadow-text-sm"
			>Tilmeld for flere nyheder</small
		>
		<h2 id="newsletter" class="text-2xl font-bold tracking-wide">Nyhedsbrev</h2>
	</div>
	<p class="text-muted max-w-2xl drop-shadow-text-sm mx-auto">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet neque augue, non luctus
		urna porta in. Sed non euismod orci, vel blandit dolor. Quisque elementum est at nisl finibus
		sagittis.
	</p>

	<form
		id="newsletter-form"
		class="border-4 border-accent rounded-full p-1 flex items-center justify-between max-w-md mx-auto"
		on:submit={(event) => signupLetter(event)}
		{disabled}
	>
		<input
			type="email"
			bind:value={email}
			required
			id="email"
			placeholder="Email"
			class="p-2 mx-4 bg-transparent w-full text-sm border-transparent flex-1 border-b-2 rounded-none caret-accent 
            placeholder:text-accent focus:placeholder:text-muted focus:outline-none focus:border-accent"
			{hidden}
		/>
		<label for="email" class="sr-only">Indtast din email</label>
		<button
			class="bg-bkg text-accent py-3 px-4 sm:px-8 rounded-full border
            border-accent focus:outline-none focus-visible:ring-2 
            ring-bkg ring-offset-bkg ring-offset-2 hover:bg-muted/20 
            flex gap-x-2 shrink-0"
			id="newsletterBtn"
			type="submit"
			{disabled}
		>
			{@html btnMessage}
		</button>
	</form>
</section>
