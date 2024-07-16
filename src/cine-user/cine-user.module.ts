import { Module } from '@nestjs/common';
import { CineUserService } from './cine-user.service';
import { CineUserController } from './cine-user.controller';
import { CineUser } from './entities/cine-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([CineUser])],
  controllers: [CineUserController],
  providers: [CineUserService],
  exports: [CineUserService],
  
})
export class CineUserModule {}
