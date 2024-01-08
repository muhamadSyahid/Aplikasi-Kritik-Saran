import { Injectable } from '@nestjs/common';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KategoriService {
  constructor(private prisma: PrismaService) {}
  create(createKategoriDto: CreateKategoriDto) {
    return this.prisma.kategori.create({ data: createKategoriDto });
  }

  async findAll() {
    const result = this.prisma.kategori.findMany();
    return result;
  }

  findOne(id: number) {
    return this.prisma.kategori.findUnique({ where: { id } });
  }

  update(id: number, updateKategoriDto: UpdateKategoriDto) {
    return this.prisma.kategori.update({
      where: { id },
      data: updateKategoriDto,
    });
  }

  remove(id: number) {
    return this.prisma.kategori.delete({ where: { id } });
  }
}
