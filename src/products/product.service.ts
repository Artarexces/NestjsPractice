import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from './DTO/product.dto';
import { CreateProducts } from './DTO/create-products.dto';

@Injectable()
export class ProductService {

    private products: Products[] = []
    private currentID = 1;

    getProducts(){
        return this.products
    }

    getProductsById(id: Number){
        const product = this.products.find((p)=> p.id === id)
            if(!product) throw new NotFoundException(`Tarea con id ${id} no encontrada`)
            return product
    }

    createProducts(product: CreateProducts){
        const newProduct = {
            id: this.currentID++,
            ... product
        }
        this.products.push(newProduct)
        return newProduct;
    }

    updateTask(id: number, updateProduct: any){
    const product = this.products.find(p => p.id === id)
        if(!product) throw new NotFoundException(`producto con id ${id} no encontrado`) 

        const newProduct = {
            ...product,
            ...updateProduct,
        }
        this.products = this.products.map(p => (p.id === id ? newProduct : id ))
        return { 
            message: `Producto con id ${id} actualizado correctamente`, 
            updateProduct: newProduct,
        }
    }


    patchProduct(id: number, partialProduct: any){
        const product = this.products.find(p => p.id === id)
        if(!product) throw new NotFoundException(`Producto con id ${id} no encontrado`) 

        Object.assign(product, partialProduct)
        return { 
            message: `Producto con id ${id} actualizado correctamente`, 
            updateTask: product,
        }
    }

    deleteProduct(id: number){
        const product = this.products.find((p)=> p.id === id)
        if(!product) throw new NotFoundException(`Producto con id ${id} no encontrado`)
            this.products.filter(p=> p.id !== id)
        return {
            message: `Producto con id ${id} eliminado correctamente`,
            deletedProduct: product
        }
    }
}
