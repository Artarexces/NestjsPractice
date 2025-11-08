import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class createUsers {
    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string
    
}

//MEJORA, AGREGAR UNA CONTRASEÑA CON SU VALIDADOR DE IsPassword