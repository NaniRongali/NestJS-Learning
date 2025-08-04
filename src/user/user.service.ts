import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {

    // we are injecting hello Service in UserService 
    //hello module must export HelloService
    //use module must import HelloModule
    constructor(private readonly helloService: HelloService) { }

    //this is the one service method
    getAllUsers() {
        return [
            {
                id: 1, name: 'Nani'
            },
            {
                id: 2, name: 'Rongali'
            },
            {
                id: 3, name: 'RongaliVaniPalem'
            }
        ]
    }

    getUserById(id: number) {
        const user = this.getAllUsers().find(user => user.id === id);

        return user;



    }

    getWelcomeMessage(userId: number) {

        const user = this.getUserById(userId);
        if (!user) {
            return 'User not found';
        }
        return this.helloService.getHelloWithName(user?.name);
    }

}
