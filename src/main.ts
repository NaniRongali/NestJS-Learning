import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//root file  --> 
async function bootstrap() {

  //global settings
  //env
  //starts a http server

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
