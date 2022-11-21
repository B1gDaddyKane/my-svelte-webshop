import type { Handle } from '@sveltejs/kit/types/internal';
import PocketBase from 'pocketbase';

export const pocketbaseAuthHandle: Handle = async ({event, resolve}) => {
    event.locals.pocketbase = new PocketBase("http//:127.0.0.1:8090");

    event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.set('set-cookie', event.locals.pocketbase.authStore.exportToCookie());

    return response;
} 