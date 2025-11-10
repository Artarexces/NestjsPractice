import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class createUsers {
    
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

