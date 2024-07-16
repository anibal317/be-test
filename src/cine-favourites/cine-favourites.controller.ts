import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CineFavouritesService } from './cine-favourites.service';
import { CreateCineFavouriteDto } from './dto/create-cine-favourite.dto';
import { UpdateCineFavouriteDto } from './dto/update-cine-favourite.dto';

@Controller('cine-favourites')
export class CineFavouritesController {
  constructor(private readonly cineFavouritesService: CineFavouritesService) {}

  @Post()
  create(@Body() createCineFavouriteDto: CreateCineFavouriteDto) {
    return this.cineFavouritesService.create(createCineFavouriteDto);
  }

  @Get()
  findAll() {
    return this.cineFavouritesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cineFavouritesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCineFavouriteDto: UpdateCineFavouriteDto) {
    return this.cineFavouritesService.update(+id, updateCineFavouriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cineFavouritesService.remove(+id);
  }
}
