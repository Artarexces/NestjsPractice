export interface Products {
    id: number,
    name: string,
    price: number,
    stock: boolean
}

export interface CreateProducts {
    name: string,
    price: number,
    stock: boolean
}