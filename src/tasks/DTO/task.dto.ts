import { IsString, IsNumber, IsBoolean, IsNotEmpty, MinLength } from "class-validator"

export class Task{

    @IsNumber()
    id: number

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string

    @IsBoolean()
    status: boolean

}

