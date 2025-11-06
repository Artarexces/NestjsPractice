import { IsNumber, IsString, IsBoolean } from "class-validator"

export class updateProduct {
    
    @IsNumber()
    id: number

    @IsString()
    name?: string

    @IsNumber()
    price?: number

    @IsBoolean()
    stock?: boolean

}