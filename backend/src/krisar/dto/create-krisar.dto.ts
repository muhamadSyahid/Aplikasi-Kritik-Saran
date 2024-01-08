import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateKrisarDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id_tipe: number;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  @ApiProperty({ required: false })
  kritik?: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  @ApiProperty({ required: false })
  saran?: string;
}
