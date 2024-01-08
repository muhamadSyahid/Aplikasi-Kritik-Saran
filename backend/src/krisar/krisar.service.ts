import { Injectable } from '@nestjs/common';
import { CreateKrisarDto } from './dto/create-krisar.dto';
import { UpdateKrisarDto } from './dto/update-krisar.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KrisarService {
  constructor(private prisma: PrismaService) {}
  create(createKrisarDto: CreateKrisarDto) {
    return this.prisma.krisar.create({ data: createKrisarDto });
  }

  async findAll() {
    const result = this.prisma.krisar.findMany();
    return result;
  }

  findOne(id: number) {
    return this.prisma.krisar.findUnique({
      where: { id },
      include: {
        tipe: {
          include: {
            kategori: true,
          },
        },
      },
    });
  }

  update(id: number, updateKrisarDto: UpdateKrisarDto) {
    return this.prisma.krisar.update({
      where: { id },
      data: updateKrisarDto,
    });
  }

  remove(id: number) {
    return this.prisma.krisar.delete({ where: { id } });
  }
}
