import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';
import type { ProductList } from 'src/models/product.model';

const client = new PocketBase('https://sjaelfulde-fund.fly.dev');

export const load: PageLoad = async(): Promise<ProductList> => {
    return await client.collection('products').getList(1, 100, { sort: '-created'});; 
}