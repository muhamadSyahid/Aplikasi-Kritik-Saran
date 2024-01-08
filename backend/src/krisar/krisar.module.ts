import { Module } from '@nestjs/common';
import { KrisarService } from './krisar.service';
import { KrisarController } from './krisar.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [KrisarController],
  providers: [KrisarService],
  imports: [PrismaModule],
})
export class KrisarModule {}
