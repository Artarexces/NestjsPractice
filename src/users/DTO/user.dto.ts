import { IsString, IsNumber, IsEmail } from "class-validator"

export class Users {
    
    @IsNumber()
    id: number

    @IsString()
    name: string
    
    @IsEmail()
    email: string
    
}
