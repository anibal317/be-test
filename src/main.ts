import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RedirectMiddleware } from './redirect.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: false
    })
  )
  app.enableCors();
  app.use(new RedirectMiddleware().use); // Aplica el middleware globalmente
  await app.listen(3001);
  console.log('http://localhost:3001');

}
bootstrap();
