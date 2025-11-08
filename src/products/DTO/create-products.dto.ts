import { IsString, IsNumber, IsBoolean, IsNotEmpty } from "class-validator"

export class CreateProducts {
    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsBoolean()
    stock: boolean
    
}