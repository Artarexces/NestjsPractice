import { Injectable, NotFoundException } from '@nestjs/common';
import { createUsers, Users } from './DTO/create-user.dto';


@Injectable()
export class UserService {

    private users: Users[] = []
    private currentID = 1;


    getUsers() {
        return this.users
    }

    getUserById(id: number) {
        const user = this.users.find((u) => u.id === id)
        if(!user) throw new NotFoundException(`Usuario con id ${id} no encontrado`)
        return user;
    }

    createUser(user: createUsers) {
        const newUser: Users = {
            id: this.currentID++,
            ... user,
        };
        this.users.push(newUser)
        return newUser;
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
