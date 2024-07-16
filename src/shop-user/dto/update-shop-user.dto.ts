import { PartialType } from '@nestjs/mapped-types';
import { CreateShopUserDto } from './create-shop-user.dto';

export class UpdateShopUserDto extends PartialType(CreateShopUserDto) {}
