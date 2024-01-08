import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTipeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nama_tipe: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id_kategori: number;
}
