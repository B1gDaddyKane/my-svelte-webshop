import type { ProductList } from "src/models/product.model";
import type {PageLoad} from './$types';
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

export const load: PageLoad = async (): Promise<ProductList> => {
    return await client.records.getList('products', 1, 100, {sort: '-created'})
}