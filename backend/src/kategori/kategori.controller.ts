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
import { KategoriService } from './kategori.service';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { KategoriEntity } from './entities/kategori.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('kategori')
@ApiTags('kategori')
export class KategoriController {
  constructor(private readonly kategoriService: KategoriService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: KategoriEntity })
  async create(@Body() createKategoriDto: CreateKategoriDto) {
    try {
      const result = await this.kategoriService.create(createKategoriDto);
      return result;
    } catch (error) {
      if (error) {
        throw new ForbiddenException(
          `Kategori dengan Nama: ${createKategoriDto.Nama} sudah ada dalam data.`,
        );
      }
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: KategoriEntity, isArray: true })
  findAll() {
    return this.kategoriService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: KategoriEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.kategoriService.findOne(id);
    if (!result) {
      throw new NotFoundException(
        `Kategori dengan id: ${id} tidak ada dalam data.`,
      );
    }
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: KategoriEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKategoriDto: UpdateKategoriDto,
  ) {
    try {
      const result = await this.kategoriService.update(id, updateKategoriDto);
      return result;
    } catch (error) {
      throw new NotFoundException(
        `Kategori dengan id: ${id} tidak ada dalam data.`,
      );
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: KategoriEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.kategoriService.remove(id);
      return result;
    } catch (error) {
      throw new NotFoundException(
        `Kategori dengan id: ${id} tidak ada dalam data.`,
      );
    }
  }
}
