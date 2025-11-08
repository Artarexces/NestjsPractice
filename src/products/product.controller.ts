import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProducts } from './DTO/create-products.dto';
import { updateProduct } from './DTO/updateProduct.dto';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get()
    getProducts(){
        return this.productService.getProducts()
    }

    @Get(":id")
    getProductsById(@Param('id') id: string){
        return this.productService.getProductsById(Number(id))
    }


    @Post()
    @UsePipes(new ValidationPipe())
    createProducts(@Body() product: CreateProducts){
        return this.productService.createProducts(product);
    }

    @Put()
    @UsePipes(new ValidationPipe())
    updateProduct(@Param("id",ParseIntPipe)id: number,@Body() product: updateProduct ){
        return this.productService.updateProduct(id,product)

    }


    @Delete()
    deleteProducts(){
        
    }
}
