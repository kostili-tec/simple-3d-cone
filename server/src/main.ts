import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { configDotenv } from 'dotenv';

import { AppModule } from './app.module';

async function bootstrap() {
  configDotenv({ path: '.env' });
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () =>
    console.log(`Server started on port = ${PORT} `),
  );
}
bootstrap();
