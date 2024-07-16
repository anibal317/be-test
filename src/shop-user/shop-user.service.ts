import { Injectable } from '@nestjs/common';
import { CreateShopUserDto } from './dto/create-shop-user.dto';
import { UpdateShopUserDto } from './dto/update-shop-user.dto';

@Injectable()
export class ShopUserService {
  create(createShopUserDto: CreateShopUserDto) {
    return 'This action adds a new shopUser';
  }

  findAll() {
    return `This action returns all shopUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopUser`;
  }

  update(id: number, updateShopUserDto: UpdateShopUserDto) {
    return `This action updates a #${id} shopUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopUser`;
  }
}
