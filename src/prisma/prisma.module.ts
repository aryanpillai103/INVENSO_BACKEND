import { Global ,  Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService,PrismaModule],
  controllers: []
})
export class PrismaModule {}
