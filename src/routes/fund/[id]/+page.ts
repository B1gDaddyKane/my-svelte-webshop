import Pocketbase from 'pocketbase';
import type PageLoad from './$types';
import type { Record } from 'pocketbase';

const client = new Pocketbase('http://127.0.0.1:8090');

export async function load(url : PageLoad.RouteParams): Promise<Record> {
    return await client.records.getOne('products', url.id);
} 