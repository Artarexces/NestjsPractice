import { IsNumber, IsString, IsBoolean, IsNotEmpty, MinLength } from "class-validator"

export class Products {
    
    @IsNumber()
    id: number

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    name: string

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsBoolean()
    stock: boolean

}
