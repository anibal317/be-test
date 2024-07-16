import { PartialType } from '@nestjs/mapped-types';
import { CreateCineUserDto } from './create-cine-user.dto';

export class UpdateCineUserDto extends PartialType(CreateCineUserDto) {}
