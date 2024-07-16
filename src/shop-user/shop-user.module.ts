import { ShopUser } from './entities/shop-user.entity';
import { Module } from '@nestjs/common';
import { ShopUserService } from './shop-user.service';
import { ShopUserController } from './shop-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ShopUser])],

  controllers: [ShopUserController],
  providers: [ShopUserService],
  exports: [ShopUserService]

})
export class ShopUserModule {}
