import { IsString, IsNumber, IsBoolean } from "class-validator"

export class CreateProducts {
    
    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsBoolean()
    stock: boolean
    
}