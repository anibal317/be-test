import { Injectable } from '@nestjs/common';
import { CreateCineFavouriteDto } from './dto/create-cine-favourite.dto';
import { UpdateCineFavouriteDto } from './dto/update-cine-favourite.dto';

@Injectable()
export class CineFavouritesService {
  create(createCineFavouriteDto: CreateCineFavouriteDto) {
    return 'This action adds a new cineFavourite';
  }

  findAll() {
    return `This action returns all cineFavourites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cineFavourite`;
  }

  update(id: number, updateCineFavouriteDto: UpdateCineFavouriteDto) {
    return `This action updates a #${id} cineFavourite`;
  }

  remove(id: number) {
    return `This action removes a #${id} cineFavourite`;
  }
}
