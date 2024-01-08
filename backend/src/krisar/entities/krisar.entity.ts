import { krisar } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class KrisarEntity implements krisar {
  @ApiProperty()
  id: number;

  @ApiProperty()
  id_tipe: number;

  @ApiProperty({ required: false, nullable: true })
  kritik: string | null;

  @ApiProperty({ required: false, nullable: true })
  saran: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
