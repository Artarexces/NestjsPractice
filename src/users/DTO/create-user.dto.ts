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

//MEJORA, AGREGAR UNA CONTRASEÑA CON SU VALIDADOR DE IsPassword