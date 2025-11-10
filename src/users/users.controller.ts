import { Body, Controller, Delete, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './users.service';
import { createUsers } from './DTO/create-user.dto';


@Controller('users')
export class UsersController {
constructor(private readonly userService:UserService){}

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.userService.getUserById(Number(id))
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    createUser(@Body() user: createUsers){
        return this.userService.createUser(user)
    }

    @Delete(':id')
    @HttpCode(410)
        deleteUserById(@Param('id') id: string ){
            return this.userService.deleteUsersById(Number(id))
    }

}
