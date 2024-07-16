import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncryptService } from './encrypt.service';

export class EncryptController {
  constructor(private readonly encryptService: EncryptService) { }

  @Post()
  create(@Body() pwd: string) {
    return this.encryptService.create(pwd);
  }
  @Post('/compare')
  compare(@Body() pwd: string) {
    return this.encryptService.compare(pwd);
  }
  /*
 
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.encryptService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEncryptDto: UpdateEncryptDto) {
      return this.encryptService.update(+id, updateEncryptDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.encryptService.remove(+id);
    }
    */
}
