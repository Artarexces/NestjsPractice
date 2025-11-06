import { IsNumber, IsString, IsBoolean } from "class-validator"

export class Products {
    
    @IsNumber()
    id: number

    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsBoolean()
    stock: boolean

}
