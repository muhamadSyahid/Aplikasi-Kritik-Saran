import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateKategoriDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Nama: string;
}
