import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'], // Allow all HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only certain headers
  };
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
