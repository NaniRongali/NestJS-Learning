import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';


//express
//server.js = > routes
//controller taking respose for the incoming requests and returing responses

@Controller('hello')
export class HelloConjtroller {
    //dependency injection
    constructor(private readonly helloService: HelloService) { }
// @Controller('hello') => /hello
    // @Get() => /hello
    @Get('first-hello') 
    
    // /hello/first-hello
    getHello(): string {
        return this.helloService.getHello();
    }
}
