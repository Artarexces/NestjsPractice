import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'jose deod',
            email: 'joseded@gmail.con'
        },
        {
            id: 2,
            name: 'naigel',
            email: 'danaigel@gmail.con'
        },
        {
            id: 3,
            name: 'tino',
            email: 'tinillo@gmail.con'
        },
        {
            id: 4,
            name: 'atzel',
            email: 'atzelcarni@gmail.con'
        }
    ]


    getUsers() {
        return this.users
    }

}
