<script lang="ts">
	import type { Product } from 'src/models/product.model';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let data: Product;
	let picture: string = data.images[0];
	let rotate: boolean = false;
</script>

<div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 my-10">
	<div class="flex lg:items-start sm:items-center justify-center lg:flex-row flex-col gap-8">
		<div class="w-full sm:w-96 md:w-8/12 lg:w-4/12">
			<h3
				class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal leading-4 text-gray-600 text-lg"
			>
				<a href="/fund"> Tilbage </a>
			</h3>
			<h2 class="mt-10 font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
				{data.name}
			</h2>

			<p class=" font-normal text-base leading-6 text-gray-600 mt-7">{data.description}</p>
			<p class=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
				{data.price} kr.
			</p>

			<div class="lg:mt-11 mt-10">
				<div class="flex flex-row justify-between" />
				<hr class=" bg-gray-200 w-full my-2" />
				<div class=" flex flex-row justify-between items-center mt-4">
					<p class="font-medium text-base leading-4 text-gray-600">Dimensioner</p>
					<svg
						on:click={() => {
							rotate = !rotate;
						}}
						id="rotateSVG"
						class={'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform ' +
							(rotate ? 'rotate-180' : 'rotate-0')}
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 1L5 5L1 1"
							stroke="#4B5563"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				{#if rotate}
					<div transition:slide={{ delay: 100, duration: 300, easing: quintOut }}>Hej med dig</div>
				{/if}
				<hr class="bg-gray-200 w-full mt-4" />
			</div>

			<button
				class="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
			>
				Tilføj til kurv
			</button>
		</div>

		<div
			class="w-full sm:w-96 md:w-10/12 justify-center lg:w-8/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4"
		>
			<div class="w-full lg:w-3/5 flex justify-center items-center">
				<img
					class="cursor-pointer"
					src={'http://127.0.0.1:8090/api/files/products/' + data.id + '/' + picture}
					alt={data.name}
				/>
			</div>
			<div class="w-full lg:w-1/5 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2">
				{#each data.images as image}
					<div class="flex justify-center items-center p-1">
						<img
							on:click={() => {
								picture = image;
							}}
							class="cursor-pointer"
							src={'http://127.0.0.1:8090/api/files/products/' + data.id + '/' + image}
							alt={data.name}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="flex justify-center items-center w-full">
		<div
			class="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10"
		>
			<div>
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.583 14.5834H35.4164V27.0834C35.4164 28.741 34.7579 30.3307 33.5858 31.5028C32.4137 32.6749 30.824 33.3334 29.1663 33.3334H20.833C19.1754 33.3334 17.5857 32.6749 16.4136 31.5028C15.2415 30.3307 14.583 28.741 14.583 27.0834V14.5834Z"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M18.75 6.25V14.5833"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M31.25 6.25V14.5833"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M25 33.3334V37.5C25 38.6051 25.439 39.6649 26.2204 40.4463C27.0018 41.2277 28.0616 41.6667 29.1667 41.6667H35.4167"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<p class="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Miljø venlig</p>
				<p class="text-normal text-base leading-6 text-gray-600 mt-4">
					They re-use, recycle and reduce waste disposal in their lives. They conserve energy and
					natural resources
				</p>
			</div>
			<div>
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.667 16.6666H33.3337V33.3333H16.667V16.6666Z"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M37.4997 8.33337H12.4997C10.1985 8.33337 8.33301 10.1989 8.33301 12.5V37.5C8.33301 39.8012 10.1985 41.6667 12.4997 41.6667H37.4997C39.8009 41.6667 41.6663 39.8012 41.6663 37.5V12.5C41.6663 10.1989 39.8009 8.33337 37.4997 8.33337Z"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M33.333 33.3334L40.208 40.2084"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M33.333 16.6666L40.208 9.79163"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16.667 16.6666L9.79199 9.79163"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16.667 33.3334L9.79199 40.2084"
						stroke="#4B5563"
						stroke-width="3.25"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<p class="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Minimal Design</p>
				<p class="text-normal text-base leading-6 text-gray-600 mt-4">
					Minimalist interior design is very similar to modern interior design and involves using
					the bare essentials
				</p>
			</div>
		</div>
	</div>
</div>
