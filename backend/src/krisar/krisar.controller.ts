import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { KrisarService } from './krisar.service';
import { CreateKrisarDto } from './dto/create-krisar.dto';
import { UpdateKrisarDto } from './dto/update-krisar.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { KrisarEntity } from './entities/krisar.entity';

@Controller('krisar')
@ApiTags('krisar')
export class KrisarController {
  constructor(private readonly krisarService: KrisarService) {}

  @Post()
  @ApiCreatedResponse({ type: KrisarEntity })
  async create(@Body() createKrisarDto: CreateKrisarDto) {
    try {
      const result = await this.krisarService.create(createKrisarDto);
      return result;
    } catch (error) {
      if (error) {
        throw new BadRequestException('Sistem bermasalah');
      }
    }
  }

  @Get()
  @ApiOkResponse({ type: KrisarEntity, isArray: true })
  findAll() {
    return this.krisarService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: KrisarEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.krisarService.findOne(id);
    if (!result) {
      throw new NotFoundException(
        `Data kritik dan saran dengan id: ${id} tidak ada dalam data.`,
      );
    }
    return result;
  }

  @Patch(':id')
  @ApiOkResponse({ type: KrisarEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKrisarDto: UpdateKrisarDto,
  ) {
    try {
      const result = await this.krisarService.update(id, updateKrisarDto);
      return result;
    } catch (error) {
      throw new NotFoundException(
        `Data kritik dan saran dengan id: ${id} tidak ada dalam data.`,
      );
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: KrisarEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.krisarService.remove(id);
      return result;
    } catch (error) {
      throw new NotFoundException(
        `Data kritik dan saran dengan id: ${id} tidak ada dalam data.`,
      );
    }
  }
}
