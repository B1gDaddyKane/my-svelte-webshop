import Pocketbase from 'pocketbase';
import type {PageLoad} from './$types';
import type { Record } from 'pocketbase';

const client = new Pocketbase('https://sjaelfulde-fund.fly.dev');

export const load: PageLoad = async ({params}): Promise<Record> =>  {
    return await client.collection('products').getOne(params.id);
} 