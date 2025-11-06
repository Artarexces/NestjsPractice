import { IsString, IsBoolean } from "class-validator"

export class CreateTask{

    @IsString()
    title: string

    @IsBoolean()
    status: boolean
    
}