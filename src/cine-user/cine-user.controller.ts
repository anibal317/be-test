import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CineUserService } from './cine-user.service';
import { CreateCineUserDto } from './dto/create-cine-user.dto';
import { UpdateCineUserDto } from './dto/update-cine-user.dto';

@Controller('cine-user')
export class CineUserController {
  constructor(private readonly cineUserService: CineUserService) {}

  @Post()
  create(@Body() createCineUserDto: CreateCineUserDto) {
    return this.cineUserService.create(createCineUserDto);
  }

  @Get()
  findAll() {
    return this.cineUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cineUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCineUserDto: UpdateCineUserDto) {
    return this.cineUserService.update(+id, updateCineUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cineUserService.remove(+id);
  }
}
