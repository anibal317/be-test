import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopUserService } from './shop-user.service';
import { CreateShopUserDto } from './dto/create-shop-user.dto';
import { UpdateShopUserDto } from './dto/update-shop-user.dto';

@Controller('shop-user')
export class ShopUserController {
  constructor(private readonly shopUserService: ShopUserService) {}

  @Post()
  create(@Body() createShopUserDto: CreateShopUserDto) {
    return this.shopUserService.create(createShopUserDto);
  }

  @Get()
  findAll() {
    return this.shopUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopUserDto: UpdateShopUserDto) {
    return this.shopUserService.update(+id, updateShopUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopUserService.remove(+id);
  }
}
