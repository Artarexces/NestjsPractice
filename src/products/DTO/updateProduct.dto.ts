import { IsNumber, IsString, IsBoolean, MinLength, IsNotEmpty } from "class-validator"

export class updateProduct {
    
    @IsNumber()
    id?: number

    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    name?: string

    @IsNumber()
    @IsNotEmpty()
    price?: number

    @IsBoolean()
    stock?: boolean

}