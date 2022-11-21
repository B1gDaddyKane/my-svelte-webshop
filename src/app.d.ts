/// <reference types="@sveltejs/kit" />
import PocketBase from "pocketbase";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare global {
	namespace App {
		interface Locals {
			pocketbase: PocketBase
		}
		// interface Platform {}
		// interface Session {}
		// interface Stuff {}
	}
} 
