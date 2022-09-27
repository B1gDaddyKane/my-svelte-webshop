import type { Record } from "pocketbase"

export interface Product extends Record {
    name: string,
    price: number,
    description: string,
    images: string[],
    instagram: string,
    sold: boolean,
    tags: string[],
    id: string,
}

export interface ProductList {
    page: number,
    perPage: number,
    totalItems: number,
    items: Record[]
}