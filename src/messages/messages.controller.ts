import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages') //Body Decorators
export class MessagesController {
    @Get() //Method Decorators
    listMessages() {}

    @Post()
    createMessage(@Body() body: any) {  //Argument Decorators
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) { //Argument Decorators
        console.log(id);
    }
}
