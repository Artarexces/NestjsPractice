import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './users.service';


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
    createUser(@Body() user: any){
        return this.userService.createUser(user)
    }

    @Delete(':id')
        deleteUserById(@Param('id') id: string ){
            return this.userService.deleteUsersById(Number(id))
    }

}
