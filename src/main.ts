import { NestFactory } from '@nestjs/core';
import { AssetManagementModule } from './AssetManagement.module';
import * as dotenv from 'dotenv';
import { BigIntInterceptor } from './common/interceptors/bigint.interceptor'

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AssetManagementModule);
  app.useGlobalInterceptors(new BigIntInterceptor());
  app.enableCors({
    origin: 'http://localhost:5173', // or your deployed frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, x-admin-token',
  });
  await app.listen(3000);
}
bootstrap();
