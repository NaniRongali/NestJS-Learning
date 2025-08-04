import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';


//express
//server.js = > routes
//controller taking respose for the incoming requests and returing responses

@Controller('hello')
export class HelloController {
    //dependency injection
    constructor(private readonly helloService: HelloService) { }
    // @Controller('hello') => /hello
    // @Get() => /hello
    @Get()
    // /hello/first-hello
    getHello(): string {
        return this.helloService.getHello();
    }

    @Get('user/:name')
    //for 
    getHelloWithName(@Param('name') name: string): string {
        return this.helloService
            .getHelloWithName(name);
    }
    //    /hello/query?name=john
    @Get('query')
    getHelloWithQuery(@Query('name') name: string): string {
        return this.helloService.getHelloWithName(name || 'World');
    }
}
