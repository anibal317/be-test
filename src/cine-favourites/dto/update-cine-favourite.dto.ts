import { PartialType } from '@nestjs/mapped-types';
import { CreateCineFavouriteDto } from './create-cine-favourite.dto';

export class UpdateCineFavouriteDto extends PartialType(CreateCineFavouriteDto) {}
