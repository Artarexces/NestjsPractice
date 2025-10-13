import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {

    @Get('users')
    getUsers(): string[]{
        return['niggel', 'tino', 'axel']
    }
}
