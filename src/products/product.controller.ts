import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get()
    getProducts(){
        
    }

    @Get(":id")
    getProductsById(){

    }


    @Post()
    createProducts(){

    }

    @Put()
    updateProduct(){

    }

    @Delete()
    deleteProducts(){
        
    }
}
