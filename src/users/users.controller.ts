import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
constructor(private readonly userService:UsersService){}

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.userService.getUserById(Number(id))
    }

    @Delete(':id')
        deleteUserById(@Param('id') id: string ){
            return this.userService.deleteUsersById(Number(id))
    }

}
