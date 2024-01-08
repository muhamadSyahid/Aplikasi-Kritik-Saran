import { Module } from '@nestjs/common';
import { KategoriService } from './kategori.service';
import { KategoriController } from './kategori.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [KategoriController],
  providers: [KategoriService],
  imports: [PrismaModule],
})
export class KategoriModule {}
