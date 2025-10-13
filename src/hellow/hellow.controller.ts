import { Controller, Get } from '@nestjs/common';

@Controller()
export class HellowController {

    @Get('/')
    index() {
        return 'Home page'
    }
}
