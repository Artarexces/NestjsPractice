import { IsString, IsNumber, IsEmail, IsNotEmpty } from "class-validator"

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
    
}


//MEJORA, AGREGAR UNA CONTRASEÑA CON SU VALIDADOR DE IsPassword