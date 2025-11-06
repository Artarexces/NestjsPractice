import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
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
    updateProduct(@Body() product: updateProduct){
        return

    }

///// ACA LO DEJASTE CULIAU ///////// ↑↑↑↑↑↑ Hay que ver por que da error cuando pasamos el dto y espera 2 argumentos


    @Delete()
    deleteProducts(){
        
    }
}
