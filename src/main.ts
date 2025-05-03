import { NestFactory } from '@nestjs/core';
import { AssetManagementModule } from './AssetManagement.module';

async function bootstrap() {
  const app = await NestFactory.create(AssetManagementModule);
  // app.enableCors({
  //   origin: 'http://localhost:5173', // or your deployed frontend URL
  // });
  await app.listen(3000);
}
bootstrap();
