import { IsString, IsNumber, IsBoolean, IsNotEmpty, MinLength } from "class-validator"

export class CreateProducts {
    
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