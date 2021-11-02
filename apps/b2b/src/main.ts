import { NestFactory } from '@nestjs/core';
import { B2bModule } from './b2b.module';

async function bootstrap() {
  const app = await NestFactory.create(B2bModule);
  await app.listen(3000);
}
bootstrap();
