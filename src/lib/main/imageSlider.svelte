<script lang="ts">
	import type { Product } from 'src/models/product.model';
	import { onMount } from 'svelte';
	export let products: Product[];

	let slideContainer: HTMLElement;
	let slides: NodeListOf<Element>;
	let slideBtns: NodeListOf<Element>;
	let currentImage = 0;
	let isMoving = false;

	onMount(() => {
		slideBtns = document.querySelectorAll('[data-slideBtn]');
		slideContainer?.addEventListener('transitionend', () => (isMoving = false));
		slides = document.querySelectorAll('[data-slide]');

		const slideObserver = new IntersectionObserver(
			(slide) => {
				if (slide[0].isIntersecting) disableButton([slideBtns[1]]);
			},
			{ threshold: 0.75 }
		);

		slideObserver.observe(slides[slides.length - 1]);
	});

	const slideImage = (event: HTMLButtonElement) => {
		if (isMoving) return;
		isMoving = true;
		event.id === 'prev' ? currentImage-- : currentImage++;
		slideContainer === null
			? ''
			: (slideContainer.style.transform = `translateX(-${currentImage * slides[0].clientWidth}px`);
		enableButton(slideBtns);
		currentImage === 0 && disableButton([slideBtns[0]]);
	};

	const enableButton = (els: NodeListOf<Element> | Element[]) =>
		els.forEach((el) => el.removeAttribute('disabled'));

	const disableButton = (els: NodeListOf<Element> | Element[]) =>
		els.forEach((el) => el.setAttribute('disabled', 'true'));
</script>

<section class="container grid gap-4 text-center sm:text-left relative" aria-labelledby="slider">
	<div>
		<small class="tracking-widest text-accent drop-shadow-text-sm">Nye fund på siden</small>
		<h2 id="slider" class="text-2xl font-bold tracking-wide drop-shadow-text-md">
			Sjælfulde nyheder
		</h2>
		<div class="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center gap-4">
			<p class="text-muted max-w-2xl drop-shadow-text-sm">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet neque augue, non
				luctus urna porta in. Sed non euismod orci, vel blandit dolor. Quisque elementum est at nisl
				finibus sagittis.
			</p>
			<div class="flex gap-4">
				<button
					data-slideBtn
					on:click={(event) => slideImage(event.currentTarget)}
					id="prev"
					aria-label="Vis forrige billede"
					class="grid place-items-center bg-accent hover:bg-accent/80 
					rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-2 
					ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 
					disabled:text-accent"
					disabled
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="36"
						class="pointer-events-none"
						fill="currentColor"
						viewBox="0 0 256 256"
						><rect width="256" height="256" fill="none" /><circle
							cx="128"
							cy="128"
							r="96"
							fill="none"
							stroke="currentColor"
							stroke-miterlimit="10"
							stroke-width="16"
						/><polyline
							points="144 92 104 128 144 164"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
						/></svg
					></button
				>
				<button
					data-slideBtn
					on:click={(event) => slideImage(event.currentTarget)}
					id="next"
					aria-label="Vis næste billede"
					class="grid place-items-center bg-accent hover:bg-accent/80 
					rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-2 
					ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 
					disabled:text-accent"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="36"
						class="pointer-events-none"
						fill="currentColor"
						viewBox="0 0 256 256"
						><rect width="256" height="256" fill="none" /><circle
							cx="128"
							cy="128"
							r="96"
							fill="none"
							stroke="currentColor"
							stroke-miterlimit="10"
							stroke-width="16"
						/><polyline
							points="116 92 156 128 116 164"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>
<div class="-mt-10 sm:-mt-20 lg:-mt-36 container xs:w-screen">
	<div bind:this={slideContainer} class="flex transition-transform duration-500">
		{#each products as product}
			<div data-slide class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4">
				<a href="/fund/{product.id}">
					<img
						class="object-cover h-full [@media(hover:hover)]: peer"
						src={'https://sjaelfulde-fund.fly.dev/api/files/products/' +
							product.id +
							'/' +
							product.images[0]}
						alt={product.name}
						on:dragstart={() => false}
					/>
					<p
						class="absolute bottom-4 left-4 px-4 py-4 bg-bkg font-bold text-lg pointer-events-none tracking-wide 
						[@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity"
					>
						{product.name}
					</p>
				</a>
			</div>
		{/each}
	</div>
</div>
