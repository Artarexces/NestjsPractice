import { Injectable, NotFoundException } from '@nestjs/common';
import { createUsers } from './DTO/create-user.dto';


@Injectable()
export class UserService {

    private users: createUsers[] = [ ]


    getUsers() {
        return this.users
    }

    getUserById(id: number) {
        const user = this.users.find((u) => u.id === id)
        if(!user) throw new NotFoundException(`Usuario con id ${id} no encontrado`)
        return user;
    }

    createUser(user: any) {
        this.users.push({
            id: this.users.length + 1,  
            ... user,
        });
        return user

    }


    deleteUsersById(id: number) {
        const user = this.users.find((u)=> u.id === id)
        if(!user) throw new NotFoundException(`Usuario con id ${id} no encontrado`)

            this.users = this.users.filter(u => u.id !== id);

            return{
                message: `Usuario con ID ${id} eliminado correctamente`,
                deltedUser: user,
            }
    }

}
