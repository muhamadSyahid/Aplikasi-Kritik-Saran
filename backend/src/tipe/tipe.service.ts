import { Injectable } from '@nestjs/common';
import { CreateTipeDto } from './dto/create-tipe.dto';
import { UpdateTipeDto } from './dto/update-tipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipeService {
  constructor(private prisma: PrismaService) {}
  create(createTipeDto: CreateTipeDto) {
    return this.prisma.tipe.create({ data: createTipeDto });
  }

  async findAll() {
    const result = this.prisma.tipe.findMany();
    return result;
  }

  findOne(id: number) {
    return this.prisma.tipe.findUnique({ where: { id } });
  }

  update(id: number, updateTipeDto: UpdateTipeDto) {
    return this.prisma.tipe.update({
      where: { id },
      data: updateTipeDto,
    });
  }

  remove(id: number) {
    return this.prisma.tipe.delete({ where: { id } });
  }
}
