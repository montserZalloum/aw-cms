import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
    @Get()
    getHello() { return 'Hello From Home'; }

    @Get('members')
    getMembers(){
        return [
            {
                id: 1,
                name: 'moon'
            },
            {
                id: 2,
                name: 'zalloum'
            },
        ]
    }
}
