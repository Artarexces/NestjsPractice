import { IsString, IsNumber, IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class Users {
    
    @IsNumber()
    id: number

    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string
    
}


