import { PartialType } from '@nestjs/swagger';
import { CreateKrisarDto } from './create-krisar.dto';

export class UpdateKrisarDto extends PartialType(CreateKrisarDto) {}
