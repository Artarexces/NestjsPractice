import { IsString, IsNumber } from "class-validator"

export class Users {
    
    @IsNumber()
    id: number

    @IsString()
    name: string
    
    @IsString()
    email: string
    
}
