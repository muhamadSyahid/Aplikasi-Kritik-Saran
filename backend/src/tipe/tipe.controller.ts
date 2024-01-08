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
  ForbiddenException,
  UseGuards,
} from '@nestjs/common';
import { TipeService } from './tipe.service';
import { CreateTipeDto } from './dto/create-tipe.dto';
import { UpdateTipeDto } from './dto/update-tipe.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TipeEntity } from './entities/tipe.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tipe')
@ApiTags('tipe')
export class TipeController {
  constructor(private readonly tipeService: TipeService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TipeEntity })
  async create(@Body() createTipeDto: CreateTipeDto) {
    try {
      const result = await this.tipeService.create(createTipeDto);
      return result;
    } catch (error) {
      if (error) {
        throw new ForbiddenException(
          `Tipe dengan Nama: ${createTipeDto.nama_tipe} sudah ada dalam data.`,
        );
      }
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TipeEntity, isArray: true })
  findAll() {
    return this.tipeService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TipeEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.tipeService.findOne(id);
    if (!result) {
      throw new NotFoundException(
        `Tipe dengan id: ${id} tidak ada dalam data.`,
      );
    }
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TipeEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipeDto: UpdateTipeDto,
  ) {
    try {
      const result = await this.tipeService.update(id, updateTipeDto);
      return result;
    } catch (error) {
      throw new NotFoundException(
        `Tipe dengan id: ${id} tidak ada dalam data.`,
      );
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TipeEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.tipeService.remove(id);
      return result;
    } catch (error) {
      throw new NotFoundException(
        `Tipe dengan id: ${id} tidak ada dalam data.`,
      );
    }
  }
}
