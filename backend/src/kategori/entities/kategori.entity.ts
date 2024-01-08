import { kategori } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class KategoriEntity implements kategori {
  @ApiProperty()
  id: number;

  @ApiProperty()
  Nama: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
