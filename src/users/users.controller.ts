import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
    createUser(@Body() user: createUsers){
        return this.userService.createUser(user)
    }

    @Delete(':id')
        deleteUserById(@Param('id') id: string ){
            return this.userService.deleteUsersById(Number(id))
    }

}
