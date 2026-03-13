import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Dùng PORT từ môi trường, nếu không có thì dùng 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`App running on port ${port}`);
}
bootstrap();