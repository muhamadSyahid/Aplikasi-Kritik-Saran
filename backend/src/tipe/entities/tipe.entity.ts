import { tipe } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TipeEntity implements tipe {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nama_tipe: string;

  @ApiProperty()
  id_kategori: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
