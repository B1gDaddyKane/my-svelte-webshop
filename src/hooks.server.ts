import type { Handle } from '@sveltejs/kit/types/internal';
import PocketBase from 'pocketbase';
export const handle: Handle = async ({event, resolve}) => {
    event.locals.pocketbase = new PocketBase("https://sjaelfulde-fund.fly.dev");

    event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    const response = await resolve(event);

    response.headers.set('set-cookie', event.locals.pocketbase.authStore.exportToCookie());

    return response;
}