import { PartialType } from '@nestjs/swagger';
import { CreateTipeDto } from './create-tipe.dto';

export class UpdateTipeDto extends PartialType(CreateTipeDto) {}
