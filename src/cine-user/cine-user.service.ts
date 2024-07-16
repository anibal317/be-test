import { Injectable } from '@nestjs/common';
import { CreateCineUserDto } from './dto/create-cine-user.dto';
import { UpdateCineUserDto } from './dto/update-cine-user.dto';

@Injectable()
export class CineUserService {
  create(createCineUserDto: CreateCineUserDto) {
    return 'This action adds a new cineUser';
  }

  findAll() {
    return `This action returns all cineUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cineUser`;
  }

  update(id: number, updateCineUserDto: UpdateCineUserDto) {
    return `This action updates a #${id} cineUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} cineUser`;
  }
}
