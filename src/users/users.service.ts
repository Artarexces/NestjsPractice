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
            email: 'danaigel@gmail.com'
        },
        {
            id: 3,
            name: 'tino',
            email: 'tinillo@gmail.com'
        },
        {
            id: 4,
            name: 'atzel',
            email: 'atzelcarni@gmail.com'
        },
        {
            id:5,
            name:'make',
            email:'make@gmail.com'
        }
    ]


    getUsers() {
        return this.users
    }

    getUserID(){
        return this.users.findIndex
    }

}
