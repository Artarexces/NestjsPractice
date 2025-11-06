import { IsString } from "class-validator"

export class createUsers {
    
    @IsString()
    name: string

    @IsString()
    email: string
    
}