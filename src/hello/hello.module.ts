import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

//Providers means array of Services

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  // imports : [], // import other module if you want need
  // exports : [] // export services if needed in other modules
})
export class HelloModule {}
