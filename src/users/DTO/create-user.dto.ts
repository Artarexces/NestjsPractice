import { IsEmail, IsString } from "class-validator"

export class createUsers {
    
    @IsString()
    name: string

    @IsEmail()
    email: string
    
}