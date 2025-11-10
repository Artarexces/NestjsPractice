import { IsString, IsBoolean, IsNotEmpty, MinLength } from "class-validator"

export class CreateTask{

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string

    @IsBoolean()
    status: boolean
    
}