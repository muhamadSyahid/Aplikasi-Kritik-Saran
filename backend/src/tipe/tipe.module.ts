import { Module } from '@nestjs/common';
import { TipeService } from './tipe.service';
import { TipeController } from './tipe.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TipeController],
  providers: [TipeService],
  imports: [PrismaModule],
})
export class TipeModule {}
