import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProducts } from './DTO/create-products.dto';
import { updateProduct } from './DTO/updateProduct.dto';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get()
    @HttpCode(200)
    getProducts(){
        return this.productService.getProducts()
    }

    @Get(":id")
    @HttpCode(200)
    getProductsById(@Param('id') id: String){
        return this.productService.getProductsById(Number(id))
    }


    @Post()
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    createProducts(@Body() product: CreateProducts){
        return this.productService.createProducts(product);
    }

    @Put(":id")
    @UsePipes(new ValidationPipe())
    @HttpCode(214)
    updateProduct(@Param("id")id: String,@Body() product: updateProduct){
        return this.productService.updateProduct(Number(id),product)

    }


    @Delete(":id")
    @HttpCode(410)
    deleteProducts(@Param('id')id: String){
        return this.productService.deleteProduct(Number(id))
    }
}
