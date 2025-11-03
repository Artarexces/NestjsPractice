import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProducts, Products } from './DTO/product.dto';

@Injectable()
export class ProductService {

    private product: Products[] = []
    private currentID = 1;

    getProducts(){
        return this.product
    }

    getProductsById(id: Number){
        const product = this.product.find((p)=> p.id === id)
            if(!product) throw new NotFoundException(`Tarea con id ${id} no encontrada`)
            return product
    }

    createProducts(product: CreateProducts){
        const newProduct = {
            id: this.currentID++,
            ... product
        }
        this.product.push(newProduct)
        return newProduct;
    }

        updateTask(id: number, updateProduct: any){
        const product = this.product.find(p => p.id === id)
        if(!product) throw new NotFoundException(`producto con id ${id} no encontrado`) 

        const newProduct = {
            ...product,
            ...updateProduct,
        }
        this.product = this.product.map(p => (p.id === id ? newProduct : id ))
        return { 
            message: `Producto con id ${id} actualizado correctamente`, 
            updateProduct: newProduct,
        }
    }

}
