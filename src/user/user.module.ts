import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HelloModule } from 'src/hello/hello.module';

@Module({
  imports :[HelloModule], // import other module if you want need
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
