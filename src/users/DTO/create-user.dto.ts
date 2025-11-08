import { IsEmail, IsString } from "class-validator"

export class createUsers {
    
    @IsString()
    name: string

    @IsEmail()
    email: string
    
}

//MEJORA, AGREGAR UNA CONTRASEÑA CON SU VALIDADOR DE IsPassword